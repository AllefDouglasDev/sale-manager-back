import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction as ExpressNextFunction,
} from 'express'

export type Request<
  RequestBody = any,
  ResponseBody = any,
  Params = any,
  Query = any,
> = ExpressRequest<Params, ResponseBody, RequestBody, Query>

export type Response<ResponseBody = any> = ExpressResponse<ResponseBody>
export type NextFunction = ExpressNextFunction
