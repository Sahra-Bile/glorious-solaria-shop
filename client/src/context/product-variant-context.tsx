import React, { ReactNode, createContext, useContext, useState } from "react";
import { ProductVariantsParams } from "../api/api-service.types";
import { useFetchProducts } from "../queries/product-queries";

export type ProductContextValue = {
  productVariants: ProductVariantsParams[];
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  isError: boolean;
  isFetchProductLoading: boolean;
} | null;

const ProductVariantContext = createContext<ProductContextValue>(null);

type Props = {
  children: ReactNode;
};

export const ProductVariantProvider = ({ children }: Props) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const {
    data: queryResult,
    isLoading: isFetchProductLoading,
    isError,
  } = useFetchProducts(page, limit);

  const productVariants = queryResult?.data ?? [];

  return (
    <ProductVariantContext.Provider
      value={{
        productVariants,
        page,
        setPage,
        limit,
        setLimit,
        isError,
        isFetchProductLoading,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};

export const useProductVariants = () => {
  const context = useContext(ProductVariantContext);
  if (!context) {
    throw new Error(
      "useProductVariants must be used within a ProductVariantProvider"
    );
  }
  return context;
};
