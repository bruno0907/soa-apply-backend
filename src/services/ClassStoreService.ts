import Class from '../models/Class'

interface ClassProps{
  className: string;
  specializations: Array<String>
}

class ClassesService{
  execute = async(data: ClassProps) => {
    try {      
      const newClass = await Class.create(data)   
      return newClass

    } catch (error) {
      throw Error(error.message)

    }
  }
}
export default new ClassesService

