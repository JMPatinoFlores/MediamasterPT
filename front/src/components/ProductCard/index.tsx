import { IProduct } from "@/interfaces";
import Image from "next/image";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-80">
      <div className="">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="mb-2"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{product.title}</h2>
        </div>
        <div className="flex justify-between">
          <h3 className="text-sm">{product.category}</h3>
          <p className="mt-2 text-xl font-bold text-purple-900">
            ${product.price}
          </p>
        </div>
      </div>
      <div>
        <button className="p-2 mt-2 text-white bg-purple-900 border border-transparent rounded-md hover:bg-purple-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
