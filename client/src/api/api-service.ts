import axios from "axios";
import { ProductVariantsResponse } from "./api-service.types";

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
