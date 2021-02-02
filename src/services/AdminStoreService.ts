import bcryptjs from 'bcryptjs'

import Admin from "../models/Admin"

interface AdminProps{
  username: string;
  password: string;
}

class AdminStoreService{
  execute = async({ username, password }: AdminProps) => {
    try {
      const passwordHash = await bcryptjs.hash(password, 8)

      const data = {
        username,
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