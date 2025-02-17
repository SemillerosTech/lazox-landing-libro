import Image from "next/image";
import logoWhite from "../../public/logo-white.svg";
import logoMain from "../../public/logo-main.svg";
import bannerImage from "../../public/banner-image.png";
import discount from "../../public/Discount.png";
import price from "../../public/Costo.png";
import DaysLeft from "./components/DaysLeft";
import bookYellow from "../../public/libro-yellow.png";
import footerMono from "../../public/footer-mono.svg";
import marker from "../../public/marker.png";
import ProductCard from "./components/ProductCard/ProductCard";
import Testimonials from "./components/Testimonials/Testimonials";
import monos from "../../public/monos-offer.svg";
import phone from "../../public/phone.svg";
import mail from "../../public/mail.svg";

import NewsLetterForm from "./components/NewsLetterForm/NewsLetterForm";
import PingComponent from "./components/PingComponent/PingComponent";

export default function Home() {
  return (
    <>
      <main className="pt-10 text-white flex flex-col items-center justify-center bg-banner">
        <DaysLeft />

        <div className="text-center">
          <Image
            src={logoWhite}
            alt="Lazox Logo"
            className="w-[300px] mx-auto mb-4"
          />

          <h1 className="mb-4 font-cr text-4xl leading-none">
            Feria del libro 22 FEBRERO 2025
          </h1>

          <h2 className="mb-4 font-cr text-4xl leading-none">
            Aprovecha tu descuento <br />
            <span className="text-2xl">
              y asiste GRATIS a la conferencia principal
            </span>
          </h2>
        </div>

        <div className="flex">
          <div className="h-full flex  items-start">
            <Image
              src={discount}
              alt="Libro banner"
              className="floating-image "
            />
          </div>
          <article className="text-center md:max-w-lg mx-auto">
            <Image src={bannerImage} alt="Libro banner" />
          </article>

          <div className="h-full flex items-end">
            <Image src={price} alt="Libro banner" className="floating-image" />
          </div>
        </div>
        <div className="flex justify-center relative">
          <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-lg md:text-3xl  relative -bottom-5">
            Quiero mi libro con descuento
          </button>
        </div>
      </main>

      <section className="py-20 container mx-auto px-10 md:px-0">
        <h2 className="mx-auto text-center text-main">
          ¿Por qué El Hombre en Busca de Sentido es Imperdible?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex text-left items-center justify-center flex-col order-2 md:order-1">
            <div className="flex justify-start items-start flex-col">
              <h2 className="mb-4 text-secondary text-3xl">
                Beneficios de leerlo
              </h2>
              <ul className="list-disc ml-4 marker:text-secondary">
                <li>Te ayudará a encontrar propósito en momentos difíciles.</li>
                <li>Es un libro que ha cambiado vidas en todo el mundo. </li>
                <li>
                  Lectura esencial para quienes buscan bienestar emocional.
                </li>
              </ul>

              <b className="mt-10 text-main">
                Mas de 12 millones de copias venidas en el mundo
              </b>

              <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-3xl  relative mt-10">
                Quiero mi libro con descuento
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <Image
              src={bookYellow}
              alt="Foto de ejemplo del libro "
              className="floating-image w-9/12 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto ">
        <h2 className="mb-4 text-secondary text-3xl pl-10">
          Otros libros exitosos
        </h2>

        <ProductCard />
      </section>

      <section className="container mx-auto py-20 px-10 md:px-0 hidden">
        <h2 className="mb-4 text-secondary text-3xl">
          Profesionales dan testimonio
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/TYrRJ7Spn90?si=scvE3OtW0UHwLVdk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              width="100%"
              className="h-[200px] mb-5 md:h-[350px]"
            ></iframe>
          </div>

          <div className="md:w-1/2 md:px-10">
            <h2 className="text-secondary text-3xl">Impacto a nivel mundial</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="py-20">
          <Testimonials />
        </div>
      </section>

      <section className=" bg-promos">
        <div className="container mx-auto">
          <div className="relative flex justify-center">
            <button className="bg-main text-white rounded-full font-cr py-2 px-10 text-xl md:text-3xl  relative -top-5">
              Oferta solo durante la feria del libro
            </button>
          </div>

          <div className="flex flex-col md:flex-row py-20 px-10 md:px-0">
            <div className="md:w-1/2 flex items-center justify-center">
              <Image
                src={monos}
                alt="Foto de ejemplo del libro"
                className="floating-image w-full ml-10 md:w-9/12 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <article className="bg-white rounded-xl p-4 text-lg md:text-2xl">
                <b className="text-black">
                  Disponible en la Logoteca
                  <Image
                    src={logoMain}
                    alt="Foto de ejemplo del libro"
                    className="m-3 w-[200px] my-5"
                  />
                </b>
                <ul>
                  <li>✅ Hasta 38% de descuento</li>
                  <li>✅ Módulo GRATIS del curso de logoterapia</li>
                  <li>✅ Experiencia inmersiva en la Ludoteca Lazos</li>
                  <li>👉 Stock limitado, no dejes pasar esta oportunidad.</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <h2 className="mb-4 text-main text-xl md:text-3xl text-center ">
          Déjanos tus datos para apartar tu copia de: <br />
          “El hombre en busca de sentido”
        </h2>

        <div className="mx-auto md:w-8/12">
          <NewsLetterForm />
        </div>
      </section>

      <footer className="container mx-auto flex flex-col md:flex-row justify-between px-10 md:px-0">
        <div className="order-3 md:order-1">
          <Image
            src={footerMono}
            alt="asd"
            className="transition-transform duration-300 hover:scale-110 mx-auto"
          />
        </div>

        <div className="flex flex-col justify-center order-1 md:order-2 my-10 md:my-0">
          <p className="font-bold font-cr text-secondary text-2xl">
            Encuentranos en:
          </p>

          <div className="flex">
            <div className="flex items-center justify-center mr-3">
              <Image src={marker} alt="asd" className="" />
            </div>
            <p>
              <b className="text-blue-950">
                {" "}
                Calz. de Tlalpan 1556, Col. Miravalle
              </b>{" "}
              <br />
              {"(¡A media cuadra del Metro Ermita!)"}
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col order-2 md:order-3">
          <p className="font-bold font-cr text-secondary text-2xl">
            Contáctanos en:
          </p>

          <div className="flex justify-start">
            <div className="flex items-center h-full ">
              <Image src={phone} width={20} alt="asd" className="mr-1" />
            </div>
            <p>55 3017 9924</p>
          </div>

          <div className="flex justify-start">
            <div className="flex items-center h-full ">
              <Image src={mail} width={20} alt="asd" className="mr-1" />
            </div>
            <p>rossy@semillerosdesentido.org</p>
          </div>
        </div>
      </footer>
      <PingComponent />
    </>
  );
}
