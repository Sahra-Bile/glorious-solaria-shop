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
  productId: number;
  productName: string;
  description: string;
  image: string;
  categoryId: number;
};

export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  sizeId: number;
  colorId: number;
  stockQuantity: number;
  price: number;
};

export type CustomerParams = {
  customerId: number;
  googleUserID: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
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
