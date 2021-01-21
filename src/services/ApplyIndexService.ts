import Apply from '../models/Apply'

class ApplyIndexService{
  execute = async() => {  
    try {
      const applies = await Apply.find().sort('-createdAt')
      return applies
      
    } catch (error) {
      throw new Error(error.message)
      
    }  
  }
}
export default new ApplyIndexService