import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressControllersFileuploadInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-controllers-fileupload'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
