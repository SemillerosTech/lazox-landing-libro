import Image from "next/image";
import logoFeria from "../../public/logo-feria-del-libro-lazox.svg";
import logoMain from "../../public/logo-main.svg";
import bookYellow from "../../public/libro-yellow.png";
import footerMono from "../../public/footer-mono.svg";
import marker from "../../public/marker.png";
import ProductCard from "./components/ProductCard/ProductCard";
import Testimonials from "./components/Testimonials/Testimonials";
import monos from "../../public/monos-offer.svg";
import elhombreenbuscadesentido from "../../public/libro-transparent.png";
import descuento from "../../public/Discount.png";
import precio from "../../public/Costo.png";
import cursoLogoterapia from "../../public/diplomado-slide.jpg";
import maxiConferenciaZoom from "../../public/conferencia-rossy.jpg";
import conferenciaRosaAdelaida from "../../public/conferencia-rosa-adelaida.jpg";
import whatsapp from "../../public/whatsapp.svg";
import logoSemilleros from "../../public/semilleros-logo-apaisado.svg";
import empresasUV from "../../public/empresas-uv.jpg";
import formacionContinua from "../../public/formacion-continua.jpg";
import cursor from "../../public/pointer.svg";
import mail from "../../public/mail.svg";
import NewsLetterForm from "./components/NewsLetterForm/NewsLetterForm";
import PingComponent from "./components/PingComponent/PingComponent";
import Link from "next/link";
import FloatingElements from "./components/FloatingElements/FloatingElements";
import Slider from "./components/Slider/Slider";

export default function Home() {
  const address = encodeURIComponent(
    "Calz. de Tlalpan 1552, sineo, Miravalle, Benito Juárez, 03580 Ciudad de México, CDMX"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const phoneNumber = "5530179924";
  const message = encodeURIComponent(
    "Quiero más información sobre logoterapia"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <main className="pb-10 text-white flex flex-col items-center justify-center bg-banner relative">
        <Link href={"#bibliografia"} className="w-full">
          <div className="bg-white w-full text-black top-0 left-0 p-2 text-center mb-10 font-bold">
            Toda la bibliografía de VIKTOR FRANKL al{" "}
            <b className="text-red-600"> 38% de descuento</b>
          </div>
        </Link>

        <div className="text-center z-10">
          <Image
            src={logoFeria}
            alt="Lazox Logo"
            className="w-[150px] mx-auto mb-4"
          />

          <h1 className=" font-cr text-4xl leading-none z-10">
            22 de Marzo 2025
          </h1>
        </div>

        <section className="container mx-auto">
          <Slider>
            {/* SLIDE 1 */}
            <div className="py-10 flex flex-col lg:flex-row gap-x-5">
              <div className="w-full lg:w-6/12">
                <Image
                  src={cursoLogoterapia}
                  alt="Foto de ejemplo del libro"
                  className="w-3/4 mx-auto rounded-lg"
                />
              </div>

              <div className="flex justify-center flex-col items-center w-full lg:w-6/12">
                <h2 className="text-center ">
                  <small className="text-amber-300">Diplomado Online</small>
                  <br />
                  SENTIDO DE VIDA: <br />
                  <span className="text-amber-300">LOGOTERAPIA</span>
                </h2>
                <p>🟡 Modalidad: online a través de Zoom.</p>
                <p>📆 Periodo: 25 de abril al 31 de octubre de 2025.</p>
                <p>⏰Sesiones: viernes de 17:00 a 21:00 horas.</p>

                <Link href={"#diplomado"}>
                  <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-lg md:text-3xl  relative -bottom-5">
                    Más información
                  </button>
                </Link>
              </div>
            </div>
            {/* SLIDE 2 */}
            <div className="p-10 flex flex-col lg:flex-row gap-x-5">
              <div className="w-full lg:w-6/12 flex-flex-col items-center justify-center order-2 lg:order-1">
                <h2 className="text-center  mb-5">
                  <small className="text-amber-300">
                    Grán conferencía LAZOX
                  </small>
                  <br />
                  LOGOTERAPIA EN EL AULA <br />
                </h2>

                <h2 className="text-center  mb-5">
                  <small className="text-amber-300">Invitado</small>
                  <br />
                  Miguel Mayorga González
                </h2>

                <h2 className="text-center ">
                  <small className="text-amber-300">
                    Con la participación especial de:
                  </small>
                  <br />
                  Rosa Adelaida del Valle
                </h2>

                <Link
                  href={
                    "https://wa.me/525520802821?text=Estoy%20interesad@%20en%20más%20información%20respecto%20a%20la%20conferencia%20de%20logoterapia"
                  }
                  target="_blank"
                >
                  <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-lg md:text-3xl  relative -bottom-5">
                    Inscribeme
                  </button>
                </Link>
              </div>

              <div className="w-full lg:w-6/12 order-1 lg:order-2">
                <Image
                  src={conferenciaRosaAdelaida}
                  alt="Foto de ejemplo del libro"
                  className="w-3/4 mx-auto rounded-lg"
                />
              </div>
            </div>
          </Slider>
        </section>
      </main>

      {/* DIPLOMADO LA VERACRUZANA */}

      <section
        id="diplomado"
        className="h-fit flex flex-col lg:flex-row  py-20"
      >
        <div className="w-full lg:w-6/12 relative -z-10 flex flex-col justify-center items-center">
          <h2 className="text-center  leading-none">
            Únete a una gran comunidad <br />
            que ha encontrado el sentido
          </h2>

          <Image
            src={maxiConferenciaZoom}
            alt="Conferencia Zoom Rosa Adelaida"
            className=" w-3/4 my-10"
          />

          <h2 className="text-center mb-10 leading-none">
            Con los mejores expertos en logoterapia
          </h2>
        </div>

        <div className="w-full lg:w-6/12 p-5">
          <small className="font-semibold text-[#3499D0]">
            Diplomado Online
          </small>

          <h2 className="leading-none mb-5 text-[#C2258E]">
            SENTIDO DE VIDA: <br />
            <span>LOGOTERAPIA</span>
          </h2>

          <p>🟡 Modalidad: online a través de Zoom.</p>
          <p>📆 Periodo: 25 de abril al 31 de octubre de 2025.</p>
          <p>⏰ Sesiones: viernes de 17:00 a 21:00 horas.</p>

          <h3 className="mt-5 mb-3 text-2xl text-[#C2258E]">📚 Módulos:</h3>

          <p className="mb-3">
            Conferencia introductoria Vida y obra de Viktor Frankl.
          </p>

          <ul className="pl-5 mb-3">
            <li>
              I. El corazón de la logoterapia: el sentido de vida como guía.
            </li>
            <li>II. Espiritualidad y recursos noéticos.</li>
            <li>III. Tríada de valores logoterapéuticos.</li>
            <li>IV. Tríadas en la logoterapia.</li>
            <li>V. La logoterapia y sus aplicaciones en el siglo XXI.</li>
          </ul>

          <h3 className="mt-5 mb-3 text-2xl text-[#C2258E]">💰 Inversión:</h3>

          <p className="font-bold">Público en general:</p>
          <p className="mb-4">
            Pago inicial de $1,800.00 + 6 mensualidades de $1,400.00 c/u +
            $600.00 diploma (el diploma se paga al final).
          </p>

          <p className="font-bold">Comunidad FEUV y UV:</p>

          <p className="mb-4">
            Pago inicial de $1,650.00 + 6 mensualidades de $1,250.00 c/u +
            $600.00 diploma (el diploma se paga al final).
          </p>

          <p className="mb-10">
            Al finalizar se entregará un diploma digital emitido por Formación
            Continua del Fondo de Empresas de la Universidad Veracruzana y
            avalada por la Asociación Semilleros de sentido.
          </p>

          <div className="flex justify-center gap-x-5 mb-5 ">
            <div className="w-3/12">
              <Image
                src={empresasUV}
                alt="Foto de ejemplo del libro"
                className="w-full"
              />
            </div>

            <div className="w-3/12">
              <Image
                src={formacionContinua}
                alt="Foto de ejemplo del libro"
                className="w-full"
              />
            </div>

            <div className="w-3/12 flex items-center">
              <Image
                src={logoSemilleros}
                alt="Foto de ejemplo del libro"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <a
              href="https://forms.gle/gqMeythCy8DYK84X"
              target="_blank"
              className="mx-auto bg-complement text-black rounded-full font-cr py-2 px-10 text-lg md:text-3xl  relative"
            >
              📝 Ficha de inscripción
            </a>
          </div>
        </div>
      </section>

      <section
        id="bibliografia"
        className="bg-bibliografia  text-white pt-44 pb-10  lg:py-10 relative"
      >
        <Image
          src={descuento}
          alt="Foto de ejemplo del libro"
          className="w-[150px] lg:w-[300px] absolute top-3 left-3"
        />

        <Image
          src={precio}
          alt="Foto de ejemplo del libro"
          className="w-[150px] lg:w-[300px] absolute top-3 right-3"
        />

        <div className="container mx-auto flex flex-col items-center justify-center px-5 lg:px-0 text-center">
          <h2 className="font-bold ">"El hombre en busca de sentido"</h2>

          <h2>Aprovecha tu descuento</h2>
          <p>Disponible solo en la feria del libro LAZOX</p>

          <Image
            src={elhombreenbuscadesentido}
            alt="Foto de ejemplo del libro"
            className="w-[300px]"
          />

          <h2>Este y otros libros de Viktor Frankl</h2>
          <p>A precio especial</p>
        </div>
      </section>

      <section
        id="beneficios"
        className="py-20 container mx-auto px-10 md:px-0"
      >
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
                Mas de 12 millones de copias vendidas en el mundo
              </b>

              <Link href={"#contacto"}>
                <button className="bg-complement text-black rounded-full font-cr py-2 px-10 text-3xl  relative mt-10">
                  Quiero mi libro con descuento
                </button>
              </Link>
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

      <section id="libros-exitosos" className="container mx-auto ">
        <h2 className="mb-4 text-secondary text-3xl pl-10">
          Otros libros exitosos
        </h2>

        <ProductCard />
      </section>

      <section
        id="testimonios-logoterapia"
        className="container mx-auto py-20 px-10 md:px-0 hidden"
      >
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

      <section id="promociones" className=" bg-banner">
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
            <div className="md:w-8/12 flex items-center justify-center">
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
                  <li>
                    ✅ Hasta <b>38% de descuento</b>{" "}
                  </li>
                  <li>
                    ✅ Módulo <b>GRATIS</b> del curso de logoterapia
                  </li>
                  <li>✅ Experiencia inmersiva en la Ludoteca Lazos</li>
                  <li>
                    👉 <b> Stock limitado</b>, no dejes pasar esta oportunidad.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="container mx-auto py-20">
        <h2 className="mb-4 text-main text-xl md:text-3xl text-center ">
          Déjanos tus datos para apartar tu copia de: <br />
          “El hombre en busca de sentido”
        </h2>

        <div className="mx-auto md:w-8/12">
          <NewsLetterForm />
        </div>
      </section>

      <section
        id="informacion-logoterapia"
        className="container mx-auto flex items-center justify-center py-10 px-10 flex-col"
      >
        <h2 className="text-secondary text-center ">
          Para información especializada sobre logoterapia visita:
        </h2>
        <Link href={"https://www.semillerosdesentido.org/"}>
          <Image
            src={logoSemilleros}
            alt="Semilleros de sentido"
            className="mt-4 w-[250px] transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
      </section>

      <div style={{ width: "100%", height: "350px" }}>
        <iframe
          src="https://www.google.com/maps?q=Calz.+de+Tlalpan+1552,+sineo,+Miravalle,+Benito+Juárez,+03580+Ciudad+de+México,+CDMX&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

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
            <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <p className="relative">
                <Image
                  src={cursor}
                  alt="click here"
                  className="absolute w-[32px] bottom-0 right-0"
                />

                <b className="text-blue-950">
                  Calz. de Tlalpan 1552, sineo, Miravalle, <br /> Benito Juárez,
                  CP: 03580 Ciudad de México, CDMX
                </b>
                <br />
                {"(¡A media cuadra del Metro Ermita!)"}
              </p>
            </Link>
          </div>
        </div>

        <div className="flex justify-center flex-col order-2 md:order-3">
          <p className="font-bold font-cr text-secondary text-2xl">
            Contáctanos en:
          </p>

          <div className="flex justify-start">
            <div className="flex items-center h-full ">
              <Image src={whatsapp} width={20} alt="asd" className="mr-1" />
            </div>
            <p>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                55 3017 9924
              </Link>
            </p>
          </div>

          <div className="flex justify-start">
            <div className="flex items-center h-full ">
              <Image src={mail} width={20} alt="asd" className="mr-1" />
            </div>
            <p>
              <Link href="mailto:rossy@semillerosdesentido.org">
                rossy@semillerosdesentido.org
              </Link>
            </p>
          </div>
        </div>
      </footer>
      <PingComponent />
      <FloatingElements />
    </>
  );
}
