import { Request, Response } from 'express'

import HttpStatusCode from '../enums/HttpStatusCode'
import RequestError from './types/RequestError'

interface ErrorResponse {
  message: string
  response?: any
}

export default function ErrorHandler(
  error: RequestError,
  request: Request,
  response: Response,
) {
  response.status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR)

  const errorResponse: ErrorResponse = {
    message: error.message,
  }

  if (error.response) {
    errorResponse.response = error.response
  }

  return response.json({ error: errorResponse })
}
