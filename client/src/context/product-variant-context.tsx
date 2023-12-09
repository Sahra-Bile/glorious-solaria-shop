import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductVariantsParams } from "../api/api-service.types";
import { useFetchProducts } from "../queries/product-queries";

export type ProductContextValue = {
  productVariants: ProductVariantsParams[] | undefined;
  setProductVariants: (productVariants: ProductVariantsParams[] | undefined) => void;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
} | null;

const ProductVariantContext = createContext<ProductContextValue>(null);

type Props = {
  children: ReactNode;
};
export const ProductVariantProvider = ({ children }: Props) => {
  const [productVariants, setProductVariants] = useState<
    ProductVariantsParams[] | undefined
  >([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const productQuery = useFetchProducts(page, limit);

  useEffect(() => {
    if (productQuery.data) {
       
      setProductVariants(productQuery.data.data); 
    }
  }, [productQuery.data]);

  return (
    <ProductVariantContext.Provider
      value={{
        productVariants,
        setProductVariants,
        page,
        setPage,
        limit,
        setLimit,
      }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
};

export const useProductVariants = () => useContext(ProductVariantContext);
