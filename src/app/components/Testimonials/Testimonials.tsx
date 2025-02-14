"use client";
import Image from "next/image";
import React from "react";
import person from "../../../../public/person-placeholder.jpeg";
import star from "../../../../public/star.svg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: "",
      name: "Prof. Gerome Warrior",
      stars: 5,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    },
    {
      id: 2,
      img: "",
      name: "PHD. Rose Valley",
      stars: 5,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    },
    {
      id: 3,
      img: "",
      name: "Ing. Anthony Stark",
      stars: 5,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
    },
  ];
  return (
    <>
      <div className="flex justify-between md:space-x-20 overflow-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-52 md:w-fit text-center">
            <Image
              src={person}
              alt="Libro banner"
              className="mx-auto rounded-full mb-4"
              width={100}
              height={100}
            />

            <b className="mb-3">{t.name}</b>
            <div className="flex space-x-1 mx-auto w-fit my-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Image
                  key={s}
                  src={star}
                  alt="Libro banner"
                  className=" scale-95 hover:scale-120"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="text-sm md:text-base">{t.testimonial}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
