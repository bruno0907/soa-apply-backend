import { Request, Response } from 'express'

import ApplyStoreService from '../services/ApplyStoreService'
import ApplyIndexService from '../services/ApplyIndexService'
import ApplyShowService from '../services/ApplyShowService'
import ApplyDeleteService from '../services/ApplyDeleteService'
import ApplyUpdateService from '../services/ApplyUpdateService'
import ApplyFilterService from '../services/ApplyFilterService'

class ApplicantController{
  store = async(req: Request, res: Response) => {
    const { 
      battleTag,
      charName,
      className,
      mainSpec,
      offSpec,
      about      
    } = req.body

    const data = {
      battleTag,
      charName,
      className,
      mainSpec,
      offSpec,
      about,
      approvalStatus: 'pending'
    }

    try {
      const apply = await ApplyStoreService.execute(data)       
      
      return res.status(200).json({
        status: 200,
        apply
      })      

    } catch (error) {
            
      return res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }

  index = async(req: Request, res: Response) => {
    const { status } = req.query

    try {      
      if(status){             
        const applies = await ApplyFilterService.execute(String(status))
        return res.status(200).json(applies)
      }

      const applies = await ApplyIndexService.execute()       

      return res.status(200).json({
        status: 200,
        applies
      })      
        
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }

  show = async(req: Request, res: Response ) => {
    const { id } = req.params

    try {
      const apply = await ApplyShowService.execute(id)
      return res.status(200).json({
        status: 200,        
        apply
      })
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }

  filter = async(req: Request, res:Response) => {
    try {
      const applies = await ApplyFilterService.execute(status)
      return res.status(200).json(applies)

    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }

  delete = async(req: Request, res: Response) => {
    const { id } = req.params

    try {
      await ApplyDeleteService.execute(id)
      return res.sendStatus(200)
      
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message
      })

    }
  }

  update = async(req: Request, res: Response) => {
    const { id } = req.params
    const { approvalStatus } = req.body

    try {
      const apply = await ApplyUpdateService.execute({ id, approvalStatus })
      return res.status(200).json({
        status: 200,
        apply
      })
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }
}

export default new ApplicantController