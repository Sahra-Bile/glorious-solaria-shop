import {  useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/api-service";
export const useFetchProducts = (page: number, limit: number) => {
  const { data } = useQuery({
    queryKey: ["productVariants"],
    queryFn: () => getProducts(page, limit),
  });
  return data;
};
