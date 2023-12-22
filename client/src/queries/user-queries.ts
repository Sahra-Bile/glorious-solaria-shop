import { useMutation } from "@tanstack/react-query";

import {  updateUserInfo } from "../api/api-service";
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



