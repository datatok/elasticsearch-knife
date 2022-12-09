import { Client } from '@elastic/elasticsearch'
import {Command, Flags} from '@oclif/core'

export default class DocumentsCount extends Command {
  static description = 'Count documents'

  static examples = [
    `$ oex count events
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    endpoint: Flags.string({required: true}),
  }

  static args = [{name: 'index', description: 'The elasticsearch index name', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(DocumentsCount)

    const esClient = new Client({
      node: flags.endpoint,
    })

    const countResult = await esClient.count({
      index: args.index,
    })

    this.log(`Counting documents from ${args.index}: ${countResult.body.count}`)
  }
}
