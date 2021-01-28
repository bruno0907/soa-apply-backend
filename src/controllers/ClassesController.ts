import { Request, Response } from 'express'
import ClassIndexService from '../services/ClassIndexService'
import ClassShowService from '../services/ClassShowService'
import ClassesService from '../services/ClassStoreService'

class ClassesController{
  store = async(req: Request, res: Response) =>{    
    const { className, specializations } = req.body

    const data = {
      className,
      specializations
    }

    try {
      const classes = await ClassesService.execute(data)
      return res.status(200).json(classes)
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.message
      })
    }
  }

  index = async(req: Request, res: Response) => {
    try {
      const classes = await ClassIndexService.execute()
      return res.status(200).json({
        status: 200,
        classes
      })
    } catch (error) {
      return res.status(400).json({
        status: 400,
        error: error.message
      })
    }
  }
  
}

export default new ClassesController