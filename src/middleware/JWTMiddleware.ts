import { Request, Response, NextFunction } from 'express'

import JWTService from '../services/JWTService'
import HttpStatusCode from '../enums/HttpStatusCode'

export default async function JWTMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const bearerToken = request.headers.authorization

  if (!bearerToken) {
    return response.status(HttpStatusCode.BAD_REQUEST).json({
      error: 'Token not provided',
    })
  }

  const [bearer, token] = bearerToken.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return response.status(HttpStatusCode.UNAUTHORIZED).json({
      error: 'jwt malformed',
    })
  }

  const jwtService = new JWTService()

  try {
    const decoded = await jwtService.verify(token)

    // @ts-ignore
    request.userId = decoded.userId

    next()
  } catch (err) {
    return response
      .status(HttpStatusCode.UNAUTHORIZED)
      .json({ error: err.message })
  }
}
