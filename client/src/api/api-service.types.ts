export type ProductVariantsParams = {
  variantId: number;
  productName: string;
  categoryName: string;
  description: string;
  image: string;
  sizeName: string;
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

export type ProductParams = {
  productId: number;
  categoryId: number;
  productName: string;
  description: string;
  image: string;
};

export type ProductResponse = {
  data: ProductParams;
}