import HttpStatusCode from '../enums/HttpStatusCode'

export default class RequestError<Response = any> extends Error {
  status: HttpStatusCode
  response?: Response

  constructor(message?: string, status?: HttpStatusCode, response?: Response) {
    super(message)

    this.status = status || HttpStatusCode.INTERNAL_SERVER_ERROR
    this.response = response
  }
}
