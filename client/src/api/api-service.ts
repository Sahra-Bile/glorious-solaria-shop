import axios from "axios";

import type { SingleProductVariantsParam, ProductVariantsResponse } from "./api-service.types";

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
