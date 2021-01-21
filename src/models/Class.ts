import mongoose from 'mongoose'

const ClassesSchema = new mongoose.Schema({
  className: {
    type: String
  },
  specializations: {
    type: [String]
  }
})

export default mongoose.model('Classes', ClassesSchema)