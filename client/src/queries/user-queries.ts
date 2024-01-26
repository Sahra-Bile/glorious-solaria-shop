import { useMutation } from '@tanstack/react-query'

import { logIn, register, updateUserInfo } from '../api/api-service'
import { notifySuccess } from '../utils/notifications'
import { displayApiErrors } from '../utils/error'

export const useUpdateUserInfo = () => {
  return useMutation(updateUserInfo, {
    onSuccess: () => {
      notifySuccess('User info updated successfully!')
    },
    onError: displayApiErrors,
  })
}

export const useRegisterUser = () => {
  return useMutation(register, {
    onSuccess: () => {
      notifySuccess('User registered successfully!')
    },
    onError: displayApiErrors,
  })
}

export const useLogIn = () => {
  return useMutation(logIn, {
    onSuccess: (data) => {
      const token = data.data.token
      localStorage.setItem('authToken', token)
      notifySuccess('User logged in successfully!')
    },
    onError: displayApiErrors,
  })
}

export const useAuth = () => {
  const token = localStorage.getItem('authToken')
  return token !== null // true or false
}
