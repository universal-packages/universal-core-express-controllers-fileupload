import { setFileUploadOptions } from '@universal-packages/express-controllers-fileupload'
import { CoreModule } from '@universal-packages/core'
import fileUpload from 'express-fileupload'

export default class ExpressFileUploadModule extends CoreModule<fileUpload.Options> {
  public static readonly moduleName = 'express-fileupload-module'
  public static readonly description = 'Express fileupload initialization module'

  public async prepare(): Promise<void> {
    setFileUploadOptions(this.config)
  }

  public async release(): Promise<void> {}
}
