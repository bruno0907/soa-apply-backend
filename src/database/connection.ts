import mongoose from 'mongoose'

class Database{
  async connect(db: string){
    try {
      const connection = await mongoose.connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      })     

      if(!connection) throw Error('Cannot connect to the database')

      return console.log('Connected to the Database')

    } catch (error) {
      throw new Error(error.message)
      
    }
  }
}

export default new Database