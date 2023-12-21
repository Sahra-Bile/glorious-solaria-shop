import { useMutation, useQuery } from "@tanstack/react-query";

import { getProductById, getProducts, updateUserInfo } from "../api/api-service";
import type { AddressParams } from '../api/api-service.types';
import { notifySuccess } from '../utils/notifications';
import { displayApiErrors } from '../utils/error';

export const useFetchProducts = (page: number, limit: number) => {
  const queryResult = useQuery({
    queryKey: ["productVariants", page, limit],
    queryFn: () => getProducts(page, limit),
  });
  return queryResult;
};

export const useFetchProduct = (id: number) => {
  const queryResult = useQuery({
    queryKey: ["productVariants", id],
    queryFn: () => getProductById(id),
  });
  return queryResult
}

