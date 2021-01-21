import Class from "../models/Class"

class ClassIndexService{
  execute = async() => {
    try {
      const classes = await Class.find()

      if(!classes || null) throw new Error('No classes found')
      
      return classes
    } catch (error) {
      throw Error(error.message)
    }
  }
}

export default new ClassIndexService