import { IProduct } from "@/interfaces";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("No se puede obtener los productos", error);
    return [];
  }
};

export const fetchProductDetail = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-cache",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("No se puede obtener el producto", error);
    return [];
  }
};
