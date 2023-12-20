import { useQuery } from "@tanstack/react-query";

import { getProductById, getProducts } from "../api/api-service";

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
