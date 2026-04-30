import { products, type Product } from "../COMPONENT/data/product";

export type ProductDetail = Product & {
  gallery: string[];
};

export function getAllProductIds() {
  return products.map((product) => product.id);
}

export function getProductDetailById(id: number) {
  const product = products.find((item) => item.id === id);

  if (!product) {
    return undefined;
  }

  return {
    ...product,
    gallery: [product.image],
  } satisfies ProductDetail;
}

export function getRelatedProducts(id: number) {
  const current = products.find((product) => product.id === id);

  if (!current) {
    return [];
  }

  const sameCategory = products.filter(
    (product) => product.id !== id && product.category === current.category
  );

  const fallback = products.filter(
    (product) => product.id !== id && product.category !== current.category
  );

  return [...sameCategory, ...fallback].slice(0, 2);
}
