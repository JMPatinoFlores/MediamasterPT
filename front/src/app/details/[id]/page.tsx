import { IParams } from "@/interfaces";
import { fetchProductDetail } from "@/lib/server";
import Image from "next/image";

export const ProductDetail = async ({ params }: IParams) => {
  const product = await fetchProductDetail(params.id);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mx-auto mt-6 bg-white shadow-lg md:flex-row rounded-xl">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center w-full p-4 mt-6 md:mt-0 md:w-1/2">
        <div className="flex flex-col justify-between ">
          <h1 className="pb-2 text-3xl font-bold text-purple-600">
            {product.title}
          </h1>
          <h2 className="pb-2 text-xl font-semibold">Description</h2>
          <p className="text-lg font-light">{product.description}</p>
          <div className="flex items-center justify-end mt-4">
            <p className="text-xl font-bold">{product.rating.rate}</p>
            <Image
              src="/rating.png"
              alt="rating"
              width={32}
              height={32}
              className="ml-2"
            />
          </div>

          <button className="flex items-center justify-center w-full p-2 mt-8 text-white uppercase bg-purple-700 rounded-md">
            Add to Cart
            <Image
              src={"/cart.png"}
              alt="cart"
              width={24}
              height={24}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
