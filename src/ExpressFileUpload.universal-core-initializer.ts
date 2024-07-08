import CoreInitializer from '@universal-packages/core/CoreInitializer'

export default class ExpressFileUploadInitializer extends CoreInitializer {
  public static readonly initializerName = 'express-fileupload'

  public readonly templatesLocation: string = `${__dirname}/templates`
}
