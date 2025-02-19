"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { books } from "@/app/constants/books.constant";
import star from "../../../../public/star.svg";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProductCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    desc: string;
    img: string;
  }>({
    title: "",
    desc: "",
    img: "",
  });

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
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        {books.map((b, index) => (
          <article
            key={index}
            onClick={() => {
              setModalContent({
                title: b.title,
                desc: b.description,
                img: b.img.src,
              });

              setIsOpen(true);
            }}
            className="bg-white rounded-lg border min-w-[200px] p-3 transition-transform duration-300 md:hover:scale-110 cursor-pointer"
          >
            <Image
              src={b.img}
              alt="Foto de ejemplo del libro"
              className="w-full mb-3"
              draggable={false}
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
            <p className="text-sm line-through">Precio lista:${b.price}</p>
            <small className="text-secondary text-xs font-bold">
              {b.available ? "Unidades disponibles" : "Agotado"}
            </small>
          </article>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)} // Cierra el modal al hacer clic fuera
        >
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg relative max-w-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-secondary">
              {modalContent.title}
            </h2>

            <div className="flex">
              <div className="w-1/2">
                <Image
                  src={modalContent.img}
                  alt="Libro banner"
                  className="w-full"
                  draggable={false}
                  height={10}
                  width={200}
                />
              </div>

              <div className="w-1/2 items-center flex">
                <p className="text-gray-600 mt-2">{modalContent.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
