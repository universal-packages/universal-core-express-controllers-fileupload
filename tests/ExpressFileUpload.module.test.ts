import { ExpressFileUploadModule } from '../src'

jestCore.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressFileUploadModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(core.coreModules.expressFileuploadModule).not.toBeUndefined()
    expect(core.coreModules.expressFileuploadModule.config).toEqual({ tempFileDir: './tmp1' })
  })
})
