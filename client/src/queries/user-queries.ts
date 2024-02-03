import { useMutation, useQuery } from '@tanstack/react-query'

import { getUserById, logIn, register, updateUserInfo } from '../api/api-service'
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
    onSuccess: (data) => {
      const userId = data.data.userId;
      localStorage.setItem('userId', userId);
      notifySuccess('User registered successfully!')
    },
    onError: displayApiErrors,
  })
}

export const useLogIn = () => {
  return useMutation(logIn, {
    onSuccess: (data) => {
      const { token, userId } = data.data;
      localStorage.setItem('authToken', token)
      localStorage.setItem('userId', userId)
      notifySuccess('User logged in successfully!')
    },
    onError: displayApiErrors,
  })
}

export const useAuth = () => {
  const token = localStorage.getItem('authToken')
  return token !== null // true or false
}

export const useFetchProduct = (userId: number) => {
  const queryResult = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserById({id:userId}),
  });
  return queryResult
}

