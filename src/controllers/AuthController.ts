import { Request, Response } from 'express'

class AuthController{
  adminAuth = async(req: Request, res: Response) => {
    const { authorization } = req.headers
    // const credentials = Buffer.from(authorization?.replace('Base', '').trim(), 'base64').toString()
    // const [username, password] = credentials.split(':')

    try {
      console.log(authorization)
      return res.status(200).json({
        authorization
      })
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.message
      })
    }
  }
}
export default new AuthController