export type CategoryParams = {
  categoryId: number;
  categoryName: string;
};
export type SizeParam = {
  sizeId: number;
  size: string;
};

export type ColorsParam = {
  colorId: number;
  colorName: string;
};
export type ProductParams = {
  productId?: number;
  categoryId: number;
  productName: string;
  description: string;
  image: string;
};
export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  sizeId: number;
  colorId: number;
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
