import { ExpressControllersFileuploadModule } from '../src'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    modules: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

describe(ExpressControllersFileuploadModule, (): void => {
  it('behaves as expected', async (): Promise<void> => {
    expect(core.coreModules.expressControllersFileuploadModule).not.toBeUndefined()
    expect(core.coreModules.expressControllersFileuploadModule.config).toEqual({ tempFileDir: './tmp1' })
  })
})
