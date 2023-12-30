import { useMutation } from "@tanstack/react-query";

import {  register, updateUserInfo } from "../api/api-service";
import { notifySuccess } from '../utils/notifications';
import { displayApiErrors } from '../utils/error';


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

