import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserParams } from '../models'

export const hashPassword = (password: string) => {
  const hashValue = bcrypt.hashSync(password, 8)
  return hashValue
}

export const comparePassword = (password: string, hash: string) => {
  const correct = bcrypt.compareSync(password, hash)
  return correct
}

export const getJWTToken = (user: UserParams) => {
  const userData = { userId: user.userId, email: user.email }
  const accessToken = jwt.sign(
    userData,
    process.env.JWT_SECRET || 'superSecret',
  )
  return accessToken
}

export const verifyJWT = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'superSecret')
}
