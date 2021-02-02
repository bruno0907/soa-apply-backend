import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

const sign = (payload: string | Buffer | object) => jwt.sign(payload, String(secret), { expiresIn: 86400 })
const verify = (token: string) => jwt.verify(token, String(secret))

export default {
  sign,
  verify
}