import Image from "next/image";
import React from "react";
import crazyMono from "../../../../public/mono-loco.svg";
import Link from "next/link";

const OnlyOnMobile = () => {
  return (
    <>
      <div className="hidden md:flex md:items-center md:justify-center md:flex-col fixed bg-[var(--main)] text-white w-full h-full z-50">
        <Image
          src={crazyMono}
          alt="Lazox Logo"
          className="w-[150px] mx-auto mb-4 animate-spin"
        />
        <h1 className="font-bold text-3xl text-center mb-4">
          Opps.. Lo sentimos pero este sitio <br /> está disponible solo en
          móviles
        </h1>
        <p className="mb-4">
          Por favor visitanos desde un celular o déjanos un mensaje
        </p>

        <Link
          href={
            "https://wa.me/525520802821?text=Estoy%20interesad@%20en%20más%20información%20respecto%20a%20la%20conferencia%20de%20logoterapia"
          }
          target="_blank"
        >
          <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-lg md:text-3xl  relative">
            Enviar mensaje
          </button>
        </Link>
      </div>
    </>
  );
};

export default OnlyOnMobile;
