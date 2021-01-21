import Class from "../models/Class"

class ClassShowService{
  execute = (id: string) => {
    try {
      const spec = Class.findById(id)
      if(!spec) throw new Error('Register not found')

      return spec
    } catch (error) {
      throw Error(error.message)
      
    }
    


  }
}

export default new ClassShowService