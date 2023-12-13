import { Filter } from "../context/filter-context";


export type ProductVariant = {
  variantId: number;
  productId: number;
  productName: string;
  categoryName: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  size: string;
  colorName: string;
  stockQuantity: number;
  price: number;
};

export type GroupedProduct = {
  productId: number;
  productName: string;
  categoryName: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
  stockQuantity: number;
  price: number;
  sizes: string[];
  colors: string[];
};

export const groupProductVariants = (
  variants: ProductVariant[]
): GroupedProduct[] => {
  const grouped: Record<string, GroupedProduct> = {};

  variants.forEach((variant) => {
    const productIdKey = `product-${variant.productName}`;

    if (!grouped[productIdKey]) {
      grouped[productIdKey] = {
        productId: variant.productId,
        productName: variant.productName,
        categoryName: variant.categoryName,
        description: variant.description,
        stockQuantity: variant.stockQuantity,
        price: variant.price,
        image_1: variant.image_1,
        image_2: variant.image_2,
        image_3: variant.image_3,
        image_4: variant.image_4,
        sizes: [],
        colors: [],
      };
    }

    // Add size if it doesn't already exist in the list
    if (!grouped[productIdKey].sizes.includes(variant.size)) {
      grouped[productIdKey].sizes.push(variant.size);
    }

    // Add color if it doesn't already exist in the list
    if (!grouped[productIdKey].colors.includes(variant.colorName)) {
      grouped[productIdKey].colors.push(variant.colorName);
    }
  });

  return Object.values(grouped);
};

export const filterProducts = (products: ProductVariant[], filters: Filter) => {
  return products.filter(product => {
    return (
      (filters.category ? product.categoryName === filters.category : true) &&
      (filters.color ? product.colorName === filters.color : true) &&
      (filters.size ? product.size === filters.size : true)
    );
  });
};