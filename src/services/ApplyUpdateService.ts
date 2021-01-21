import Apply from "../models/Apply"

interface ApplyUpdateProps{
  id: string;
  approvalStatus: string;
}

class ApplyUpdateService{
  execute = async({id, approvalStatus}: ApplyUpdateProps) => {
    try {   
      const apply = await Apply.findByIdAndUpdate(id, 
        { approvalStatus: approvalStatus },
        { new: true }
      )
      return apply
      
    } catch (error) {
      throw Error(error.message)
    }
  }
}
export default new ApplyUpdateService