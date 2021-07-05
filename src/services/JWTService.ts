import jwt from 'jsonwebtoken'

import IJWTService from './interfaces/IJWTService'

export default class JWTService implements IJWTService {
  privateKey = 'mysecretpass'

  create(userId: number): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { userId },
        this.privateKey,
        { algorithm: 'HS256' },
        (err, token) => {
          if (err || !token) {
            return reject(err)
          }

          return resolve(token)
        },
      )
    })
  }

  verify<T = { userId: number }>(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.privateKey, (err, decoded) => {
        if (err) {
          return reject(err)
        }

        return resolve(decoded as T)
      })
    })
  }
}
