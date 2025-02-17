"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import successBook from "../../../../public/libro-transparent.png";
import { books } from "@/app/constants/books.constant";
import star from "../../../../public/star.svg";

const ProductCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true); // Activar el arrastre
      setStartX(e.pageX - scrollRef.current.offsetLeft); // Almacenar la posición inicial del clic
      setScrollLeft(scrollRef.current.scrollLeft); // Guardar la posición de desplazamiento inicial
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Desactivar el arrastre cuando se suelta el clic
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return; // Si no estamos arrastrando, no hacemos nada
    if (scrollRef.current) {
      const moveX = e.pageX - scrollRef.current.offsetLeft;
      const scroll = scrollLeft - (moveX - startX); // Calculamos el desplazamiento
      scrollRef.current.scrollLeft = scroll; // Aplicamos el desplazamiento
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex justify-between overflow-x-auto overflow-y-hidden pl-10 space-x-2 md:space-x-6 mb-10 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          cursor: isDragging ? "grabbing" : "grab", // Cambiar el cursor dependiendo de si estamos arrastrando
          userSelect: "none", // Deshabilitar la selección de texto
        }}
      >
        {books.map((b, index) => (
          <article
            key={index}
            className="bg-white rounded-lg border min-w-[200px] p-3 transition-transform duration-300 md:hover:scale-110 cursor-pointer"
          >
            <Image
              src={successBook}
              alt="Foto de ejemplo del libro"
              className="w-full mb-3"
              draggable={false} // Deshabilitar arrastre de la imagen
            />
            <div
              className="text-sm leading-tight w-full overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              <b>{b.title}</b>
            </div>

            <div className="flex justify-start space-x-1 w-fit my-1">
              {Array.from({ length: b.rating }, (_, i) => (
                <Image
                  key={i}
                  src={star}
                  alt="Libro banner"
                  className="scale-95 hover:scale-110 transition-transform"
                  width={20}
                  height={20}
                  draggable={false} // Deshabilitar arrastre de las estrellas
                />
              ))}
            </div>
            <b className="text-black text-2xl">${b.offerPrice}</b>
            <p className="text-sm line-through">Precio normal:${b.price}</p>
            <small className="text-secondary text-xs font-bold">
              {b.available ? "Unidades disponibles" : "Agotado"}
            </small>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
