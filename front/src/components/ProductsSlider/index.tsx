"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { IProduct, IProductsSliderProps } from "@/interfaces";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";

export const ProductsSlider = ({ products }: IProductsSliderProps) => {
  return (
    <div className="flex flex-col justify-center h-screen p-4">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          700: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%] h-3/4"
      >
        {products.map((product: IProduct) => (
          <SwiperSlide key={product.id}>
            <div className="relative flex flex-col items-center h-full overflow-hidden bg-white shadow-lg group rounded-xl">
              <div className="relative w-full h-2/3">
                <Link
                  href={`/details/${product.id}`}
                  className="cursor-pointer "
                >
                  <div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-scale-down p-4 rounded-t-xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                </Link>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-gray-300 group-hover:text-purple-500 group-hover:rotate-45 duration-300" />
              </div>
              <div className="flex flex-col justify-between w-full px-1 h-1/3">
                <div className="">
                  <h2 className="text-lg font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <h3 className="flex text-sm text-gray-600 ">
                    {product.category}
                  </h3>
                </div>
                <div className="flex items-center justify-between mx-2 mb-8">
                  <p className="text-lg font-bold text-purple-900">
                    ${product.price}
                  </p>
                  <Link
                    href={"#"}
                    className="flex p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500"
                  >
                    Add to Cart
                    <Image
                      src={"/cart.png"}
                      alt="cart"
                      width={24}
                      height={24}
                      className="ml-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
