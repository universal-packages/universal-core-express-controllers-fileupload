import { Logger } from '@universal-packages/logger'
import { populateTemplates } from '@universal-packages/template-populator'

import ExpressFileUploadTask from '../src/ExpressFileUpload.universal-core-task'

jest.mock('@universal-packages/template-populator')

describe(ExpressFileUploadTask, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })

    let task = new ExpressFileUploadTask('init', [], {}, logger)
    await task.exec()
    expect(populateTemplates).toHaveBeenCalled()
  })
})
