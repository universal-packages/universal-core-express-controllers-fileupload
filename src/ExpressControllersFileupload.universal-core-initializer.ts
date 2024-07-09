import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersFileuploadInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-fileupload'
    public static readonly description: string = 'Express Controllers Fileupload Initializer'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
