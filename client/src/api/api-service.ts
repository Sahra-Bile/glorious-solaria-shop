import axios from "axios";

import type { SingleProductVariantsParam, ProductVariantsResponse, AddressParams } from "./api-service.types";

export const axiosInstance = axios.create({
  baseURL: " http://localhost:9000/",
});

export const getProducts = async (
  page: number,
  limit: number
): Promise<ProductVariantsResponse> => {
  const response = await axiosInstance.get<ProductVariantsResponse>(
    `product-variants?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const getProductById = async (
  id:number
): Promise<SingleProductVariantsParam> => {
  const response = await axiosInstance.get<SingleProductVariantsParam>(
    `product-variants/${id}`
  );
  return response.data;
};

export const updateUserInfoll = async (googleUserId:string , user:AddressParams) => {
  const response = await axiosInstance.put(`/users/${googleUserId}`, user);
  return response.data;
}

export const updateUserInfo = (googleUserId:string , user:AddressParams) =>
axiosInstance.put(`/users/${googleUserId}`, {user});


