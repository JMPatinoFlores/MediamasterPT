import { ProductsSlider } from "@/components/ProductsSlider";
import { IProduct } from "@/interfaces";
import { fetchProducts } from "@/lib/server";

export const Products = async () => {
  const products: IProduct[] = await fetchProducts();

  return (
    <div>
      <ProductsSlider products={products} />
    </div>
  );
};

export default Products;
