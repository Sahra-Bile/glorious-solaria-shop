export type CategoryParams = {
  categoryId: number;
  categoryName: string;
};
export type SizeParams = {
  sizeId: number;
  size: string;
};

export type ColorParams = {
  colorId: number;
  colorName: string;
};
export type ProductParams = {
  productId: number;
  categoryId: number;
  productName: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;

};
export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  sizeId: number;
  colorId: number;
  stockQuantity: number;
  price: number;
};
export type ProductVariantDisplay = {
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

export type OrdersParams = {
  orderId: number;
  customerId: number;
  orderDate: string;
  totalAmount: number;
  orderStatus: string;
};

export type OrderDetailsParams = {
  orderDetailsId: number;
  orderId: number;
  variantId: number;
  quantity: number;
  pricePerItem: number;
};
