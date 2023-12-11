export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  productName: string;
  categoryName: string;
  description: string;
  image: string;
  size: string;
  colorName: string;
  stockQuantity: number;
  price: number;
};

export type ProductVariantsResponse = {
  page: number;
  totalPages?: number;
  limit: number;
  totalRows?: number;
  data: ProductVariantsParams[];
};

