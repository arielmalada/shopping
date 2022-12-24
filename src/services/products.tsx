import { AxiosResponse } from "axios";
import { get } from "./api";

export interface ProductTypes {
  id: string;
  title: string;

  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  brand: string;
  category: string;
  thumbnail: string;
  actual: number;
  images: string[];
}

export interface ProductsTypes {
  products: ProductTypes;
  total: number;
  skip: number;
  limit: number;
}

export const getProduct = async (id: number) => {
  try {
    const res: AxiosResponse<ProductTypes> = await get(`products/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const res: AxiosResponse<ProductsTypes> = await get(`products`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsByCategory = async (category: string, params?: string) => {
  try {
    const res: AxiosResponse<ProductsTypes> = await get(`products/category/${category}?${params || ""}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
