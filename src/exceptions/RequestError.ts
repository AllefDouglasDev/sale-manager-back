import HttpStatusCode from '../enums/HttpStatusCode'

export default class RequestError<Response = any> extends Error {
  status: HttpStatusCode
  response?: Response

  constructor(message?: string, status?: HttpStatusCode, response?: Response) {
    super(message)

    this.status = status || HttpStatusCode.INTERNAL_SERVER_ERROR
    this.response = response
  }

  static internalServerError<R = any>(message: string): RequestError<R> {
    return new RequestError<R>(message, HttpStatusCode.INTERNAL_SERVER_ERROR)
  }
}
