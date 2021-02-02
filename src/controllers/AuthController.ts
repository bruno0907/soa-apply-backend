import { Request, Response } from 'express'
import AdminAuthService from '../services/AdminAuthService'

class AuthController{
  auth = async(req: Request, res: Response) => {
    const { username, password } = req.body
    
    try {
      const response = await AdminAuthService.execute({ username, password })
      
      return res.status(200).json(response)
    } catch (error) {
      return res.status(400).json({
        error: error.message
      })
    }
  }
}
export default new AuthController