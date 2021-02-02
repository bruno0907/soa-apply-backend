import { compare } from 'bcryptjs'
import jwt from '../config/jwt'

import Admin from "../models/Admin"

interface AuthProps{
  username: string;
  password: string;
}

class AdminAuthService{  
  execute = async({username, password}: AuthProps) => {    
    const admin = await Admin.findOne({ username })

    if(!admin) throw new Error('Username or password is invalid!')

    const isValidPassword = await compare(password, admin.password)

    if(!isValidPassword) throw new Error('Username or password is invalid!')

    const payload = { username, password }

    const token = jwt.sign(payload)

    return {
      token
    }
  }
}

export default new AdminAuthService