import Apply from "../models/Apply"

class ApplyFilterService{
  execute = async(status: string) => {
    try {
      const response = await Apply.find({ approvalStatus: status })

      if(!response) throw Error('No applies found!')

      return response
    } catch (error) {
      throw Error(error.message)
      
    }
  }
}

export default new ApplyFilterService