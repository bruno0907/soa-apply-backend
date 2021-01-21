import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,    
  }
}, {
  timestamps: true,
})

export default mongoose.model('Admin', AdminSchema)