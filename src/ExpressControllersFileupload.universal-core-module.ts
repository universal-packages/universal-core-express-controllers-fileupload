import { CoreModule } from '@universal-packages/core'
import { setFileUploadOptions } from '@universal-packages/express-controllers-fileupload'
import fileUpload from 'express-fileupload'

export default class ExpressControllersFileuploadModule extends CoreModule<fileUpload.Options> {
  public static readonly moduleName = 'express-controllers-fileupload'
  public static readonly description = 'Express Controllers Fileupload initialization module'

  public async prepare(): Promise<void> {
    setFileUploadOptions(this.config)
  }

  public async release(): Promise<void> {}
}
