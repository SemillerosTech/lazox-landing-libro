"use client";
import React, { useState, useEffect } from "react";

const DaysLeft = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-02-22");
    const today = new Date();
    const difference = Math.ceil(
      (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    setDaysLeft(difference);
  }, []);

  // Convertir los días en dos dígitos
  const daysString = daysLeft.toString().padStart(2, "0");

  return (
    <>
      <article className=" w-[180px] fixed top-4 right-4 text-center flex-col gap-2 z-10 p-3 hidden md:flex">
        <div className="absolute bg-red-600 blur h-full w-full z-0 top-0 left-0 opacity-50"></div>
        <div className="bg-white rounded-full py-1 font-cr text-black text-3xl w-full shadow-md z-10">
          Faltan
        </div>
        <div className="flex gap-3">
          <div className="bg-white rounded-3xl py-3 font-cr text-black text-5xl w-1/2 min-h-20 flex items-center justify-center shadow-md z-10">
            {daysString[0]}
          </div>
          <div className="bg-white rounded-3xl py-2 font-cr text-black text-5xl w-1/2 min-h-20 flex items-center justify-center shadow-md z-10">
            {daysString[1]}
          </div>
        </div>
        <div className="z-10">
          <div className="bg-white rounded-full py-1 font-cr text-black text-3xl w-full shadow-md z-10">
            Días
          </div>
        </div>
      </article>

      <article className="bg-white fixed py-1 font-cr text-black text-sm w-full shadow-md z-10 right-0 top-0 text-center md:hidden">
        Faltan {daysLeft} días
      </article>
    </>
  );
};

export default DaysLeft;
