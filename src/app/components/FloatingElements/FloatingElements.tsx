import Image from "next/image";
import React from "react";
import whatsapp from "../../../../public/whatsapp.svg";

const FloatingElements = () => {
  return (
    <>
      <a
        href="https://wa.me/525520802821?text=Estoy%20interesad@%20en%20más%20información%20respecto%20a%20la%20logoterapia"
        target="_blank"
      >
        <Image
          src={whatsapp}
          alt="llámanos"
          className="fixed bottom-3 right-3 w-[3rem]"
        />
      </a>
    </>
  );
};

export default FloatingElements;
