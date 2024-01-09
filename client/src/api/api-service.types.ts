import { Register } from '../components';

export type ProductVariantsParams = {
  variantId: number;
  productId: number;
  productName: string;
  categoryName: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  sizes: string;
  colors: string;
  stockQuantity: number;
  price: number;
};
export type SingleProductVariantsParam = {
  variantId: number;
  productId: number;
  productName: string;
  categoryName: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  sizes: string[];
  colors: string[];
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

export type RegisterUserParams = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword:string
}
export type LogInParams = {
  email: string
  password: string
}
export type AddressParams = {
  phone: string;
  address: string;
  city: string;
  zipCode: string;
};
