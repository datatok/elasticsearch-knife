import {Client} from '@elastic/elasticsearch'
import {Command, Flags} from '@oclif/core'

export default class GenerateDocuments extends Command {
  static description = 'Generate documents'

  static examples = [
    `$ oex generate
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    endpoint: Flags.string({required: true}),
    limit: Flags.integer(),
    bulkSize: Flags.integer({default: 500}),
  }

  static args = [{name: 'index', description: 'The elasticsearch index name', required: true}]

  private esClient: Client

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async runTask(index: string) {
    const datasetKeys = [...Array.from({length: 10}).keys()]
    const dataset = datasetKeys.map(k => {
      return {
        hello: 'world',
        k,
        index,
      }
    })

    const operations = dataset.flatMap(doc => [{index: {_index: 'tweets'}}, doc])

    await this.esClient.bulk({body: operations})
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(GenerateDocuments)

    this.esClient = new Client({
      node: flags.endpoint,
    })

    this.runTask(args.index)
  }
}
