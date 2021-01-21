import bcryptjs from 'bcryptjs'

import Admin from "../models/Admin"

interface AdminProps{
  email: string;
  password: string;
}

class AdminStoreService{
  execute = async({ email, password }: AdminProps) => {
    try {
      const passwordHash = await bcryptjs.hash(password, 8)

      const data = {
        email,
        password: passwordHash
      }
      
      await Admin.create(data)
      return
    } catch (error) {
      throw Error(error.message)
    }
  }
}
export default new AdminStoreService