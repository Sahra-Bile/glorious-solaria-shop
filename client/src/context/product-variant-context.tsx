import type { ReactNode } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";


import type { ProductVariantsParams } from "../api/api-service.types";
import { useFetchProducts } from "../queries/product-queries";

export type ProductContextValue = {
  productVariants: ProductVariantsParams[];
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  totalPages: number;
  totalProducts: number;
  isError: boolean;
  hasMorePages: boolean;
  isFetchProductLoading: boolean;
} | null;

const ProductVariantContext = createContext<ProductContextValue>(null);

type Props = {
  children: ReactNode;
};

export function ProductVariantProvider({ children }: Props) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const {
    data: queryResult,
    isLoading: isFetchProductLoading,
    isError,
  } = useFetchProducts(page, limit);

  const productVariants = queryResult?.data ?? [];
  const totalPages = queryResult?.totalPages ?? 0;
  const totalProducts = queryResult?.totalRows ?? 0;
  const hasMorePages = totalPages > 1;

  useEffect(() => {
    if (queryResult?.page && queryResult.page !== page) {
      setPage(queryResult.page);
    }
  }, [queryResult, page]);


  return (
    <ProductVariantContext.Provider
      value={{
        productVariants,
        page,
        setPage,
        limit,
        setLimit,
        totalPages,
        totalProducts,
        hasMorePages,
        isError,
        isFetchProductLoading,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
}

export const useProductVariants = () => {
  const context = useContext(ProductVariantContext);
  if (!context) {
    throw new Error(
      "useProductVariants must be used within a ProductVariantProvider"
    );
  }
  return context;
};
