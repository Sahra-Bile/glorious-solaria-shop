import axios from 'axios'

import type {
  SingleProductVariantsParam,
  ProductVariantsResponse,
  AddressParams,
  RegisterUserParams,
  LogInParams,
} from './api-service.types'


const axiosInstance = axios.create({
  baseURL: ' http://localhost:9000/',
})

export const getProducts = async (page: number, limit: number): Promise<ProductVariantsResponse> => {
  const response = await axiosInstance.get<ProductVariantsResponse>(
    `product-variants?page=${page}&limit=${limit}`,
  )
  return response.data
}

export const getProductById = async (id: number): Promise<SingleProductVariantsParam> => {
  const response = await axiosInstance.get<SingleProductVariantsParam>(`product-variants/${id}`)
  return response.data
}
export const getUserById = ({ id }: { id: number }) => axiosInstance.get(`/users/${id}`)

export const updateUserInfo = ({ userId, params }: { userId: number; params: AddressParams }) =>
  axiosInstance.put(`/users/${userId}`, params)

export const register = ({ params }: { params: RegisterUserParams }) =>
  axiosInstance.post('/register', params)

export const logIn = ({ params }: { params: LogInParams }) => axiosInstance.post('/login', params)
export const logOut = () => axiosInstance.get('/logout')




