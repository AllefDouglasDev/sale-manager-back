import { NextFunction, Request, Response } from 'express'

import HttpStatusCode from '../enums/HttpStatusCode'
import RequestError from './types/RequestError'

interface ErrorResponse {
  [key: string]: any
  message: string
}

export default function ErrorHandler(
  error: RequestError,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  response.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR)

  const errorResponse: ErrorResponse = {
    message: error.message,
    ...error.response,
  }

  return response.json({ error: errorResponse })
}
