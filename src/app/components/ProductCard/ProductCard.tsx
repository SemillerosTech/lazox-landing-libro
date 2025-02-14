"use client";

import Image from "next/image";
import React from "react";
import successBook from "../../../../public/libro-transparent.png";

const ProductCard = () => {
  const books = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="flex justify-between overflow-x-auto overflow-y-hidden pl-10 py-10 space-x-2">
        {books.map((e, index) => (
          <article
            key={index}
            className="bg-white rounded-lg border w-fit p-3 transition-transform duration-300 md:hover:scale-125 cursor-pointer"
          >
            <Image
              src={successBook}
              alt="Foto de ejemplo del libro "
              className="w-full mb-3"
            />
            <b>Libro exitoso</b>
            <div></div>
            <b className="text-black text-2xl">$199.00</b>
            <p className="text-sm line-through">Precio normal:$200.00</p>
            <small className="text-secondary text-xs font-bold">
              Unidades disponibles
            </small>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
