import { Request, Response } from 'express'
import AdminStoreService from '../services/AdminStoreService'

class AdminController{
  store = async (req: Request, res: Response) => {
    const { username, password } = req.body

    try {
      await AdminStoreService.execute({ username, password })      
      return res.sendStatus(200)

    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.message
      })

    }
  }
}

export default new AdminController