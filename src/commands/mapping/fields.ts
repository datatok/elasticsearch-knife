/* eslint-disable camelcase */
import axios from 'axios'
import * as cliProgress from 'cli-progress'
import {Command, Flags} from '@oclif/core'
import DotObject from 'dot-object'

DotObject.keepArray = true

interface ElasticsearchSearchScrollResponse {
  _scroll_id: string
  hits: {
    hits: any[]
  }
}

export default class CheckFieldsMapping extends Command {
  static description = 'Check fields are ok according mapping'

  static examples = [
    `$ oex count events
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    endpoint: Flags.string({required: true}),
    query: Flags.string({required: false}),
    limit: Flags.integer(),
    scrollSize: Flags.integer({default: 500}),
    ignoredFields: Flags.string({required: false}),
  }

  static args = [{name: 'index', description: 'The elasticsearch index name', required: true}]

  private progressBar: cliProgress.SingleBar

  private ignoredFields: string[]

  private countDocuments: number

  private endpoint: string

  private finalMapping: Record<string, Record<string, number>>

  private fieldsWithArray: Record<string, string[]>

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  guessType(vv: any): string {
    if (vv === null) {
      return 'null'
    }

    if (Array.isArray(vv)) {
      return 'array'
    }

    return typeof vv
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async runSearch(responseData: ElasticsearchSearchScrollResponse) {
    const hits: any[] = responseData.hits.hits

    this.countDocuments += hits.length
    this.progressBar.update(hits.length)

    for (const hit of hits) {
      const doc = hit._source
      const dotDoc = DotObject.dot(doc)

      for (const [key, value] of Object.entries(dotDoc)) {
        if (this.ignoredFields.includes(key)) {
          continue
        }

        const type = this.guessType(value)

        // this.finalMapping[key][type]++

        if (type === 'array') {
          this.fieldsWithArray[key] = [
            ...(this.fieldsWithArray[key] || []),
            hit._id,
          ].splice(0, 10)
        }

        // if (type === 'array' && key !== 'data.displayed_urls') {
        //  console.log(`[${hit._id}] ${key}: ${type}`)
        // }
      }
    }

    // console.log(this.countDocuments)

    const response = await axios.post(`${this.endpoint}/_search/scroll`, {
      scroll: '30s',
      scroll_id: responseData._scroll_id,
    })

    await this.runSearch(response.data)
  }

  getSearchBody(size: number, id: number, query: string): Record<string, any> {
    return {
      size,
      slice: {
        field: '@timestamp',
        id,
        max: 10,
      },
      query: {
        query_string: {
          query: query || '',
        },
      },
    }
  }

  async getSearchCount(endpoint: string, query: string): Promise<number> {
    return new Promise((resolve, reject) => {
      axios.post(`${endpoint}/_count`, {
        query: {
          query_string: {
            query: query || '',
          },
        },
      })
      .then(response => {
        resolve(response.data.count)
      })
      .catch(error => {
        reject(error)
      })
    })
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(CheckFieldsMapping)
    const datasetKeys = [...Array.from({length: 10}).keys()]

    this.countDocuments = 0
    this.fieldsWithArray = {}
    this.finalMapping = {}
    this.endpoint = flags.endpoint
    this.ignoredFields = (flags.ignoredFields || '').split(',')
    this.progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)

    const searchCount = await this.getSearchCount(`${flags.endpoint}/${args.index}`, flags.query)

    this.progressBar.start(searchCount, 0)

    const searchesPromises = datasetKeys.map(async id => {
      let response

      const searchBody = this.getSearchBody(flags.scrollSize, id, flags.query)

      try {
        response = await axios.post(`${flags.endpoint}/${args.index}/_search?scroll=1m`, searchBody)
        .catch(function (error) {
          console.error(error.response.data)
        })
      } catch {
        console.error(response.data)
      }

      if (response?.data) {
        return this.runSearch(response.data)
      }
    })

    Promise.all(searchesPromises)

    this.progressBar.stop()

    console.log(this.fieldsWithArray)
  }
}
