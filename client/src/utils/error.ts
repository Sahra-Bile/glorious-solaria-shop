import type { AxiosError } from "axios";

import { notifyFailure } from "./notifications";
export const FALLBACK_ERROR_MESSAGE = "An error occurred.";

type ResponseDataError = {
  message?: string;
  code?: string;
};
export type ResponseData = {
  errors?: ResponseDataError[];
};

export const displayApiErrors = (error: AxiosError<ResponseData>) => {
  const responseData = error.response?.data;
  const errors = responseData?.errors;
  const fallbackErrorMessage = error.message || FALLBACK_ERROR_MESSAGE;

  if (Array.isArray(errors) && errors.length) {
    errors.forEach((errorMessage: ResponseDataError) => {
      notifyFailure(
        errorMessage.message || errorMessage.code || fallbackErrorMessage
      );
    });
  } else {
    notifyFailure(fallbackErrorMessage);
  }
};
