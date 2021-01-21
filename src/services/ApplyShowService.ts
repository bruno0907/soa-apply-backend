import Apply from "../models/Apply"

class ApplyShowService{
  execute = async(id: string) => {
    try {
      const apply = await Apply.findById(id)

      if(!apply) throw Error('Apply not found')

      return apply
    } catch (error) {
      throw Error(error.message)
      
    }
  }
}

export default new ApplyShowService