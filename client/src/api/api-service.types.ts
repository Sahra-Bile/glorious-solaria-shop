export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  sizeId: number;
  colorId: number;
  stockQuantity: number;
  price: number;
};


export type ProductVariantsResponse = {
    page: number;
    totalPages: number;
    limit: number;
    totalRows: number;
    data: ProductVariantsParams[];
  };
  