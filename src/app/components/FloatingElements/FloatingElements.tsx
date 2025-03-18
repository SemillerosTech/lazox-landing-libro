"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp, MapPin } from "lucide-react";
import whatsapp from "../../../../public/whatsapp.svg";

const FloatingElements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const destination = "19.3610131,-99.1426649";

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      <button
        onClick={scrollToTop}
        className={`fixed bottom-16 right-4 p-3 rounded-full bg-secondary text-white shadow-lg transition-opacity duration-300 hover:bg-main ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>

      <button
        onClick={openGoogleMaps}
        className="fixed bottom-4 left-4 p-3 rounded-full bg-secondary text-white shadow-lg transition-opacity duration-300 hover:bg-main"
      >
        <MapPin size={24} />
      </button>
    </>
  );
};

export default FloatingElements;
