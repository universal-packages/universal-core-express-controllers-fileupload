import { Logger } from '@universal-packages/logger'

import { ExpressFileUploadModule } from '../src'

describe('ExpressControllersFileUploadModule', (): void => {
  it('behaves as expected', async (): Promise<void> => {
    const logger = new Logger({ silence: true })
    const module = new ExpressFileUploadModule({} as any, logger)

    await module.prepare()
    await module.release()
  })
})
