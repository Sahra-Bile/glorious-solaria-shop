import { useMutation } from "@tanstack/react-query";

import {  updateUserInfo } from "../api/api-service";
import type { AddressParams } from '../api/api-service.types';
import { notifySuccess } from '../utils/notifications';
import { displayApiErrors } from '../utils/error';


export const useUpdateUserInfo = (googleUserId: string, user: AddressParams) => {
  return useMutation( () => updateUserInfo(googleUserId, user), {
    onSuccess: () => {
      notifySuccess('User info updated successfully!');
    },
    onError: displayApiErrors,
  });

}


