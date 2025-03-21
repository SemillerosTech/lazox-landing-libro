import Image from "next/image";
import React from "react";
import logoMain from "../../../public/logo-main.svg";
import logoteca from "../../../public/servicios/logoteca.jpg";
import ninosFelices from "../../../public/servicios/ninos-felices.jpg";
import spaces from "../../../public/servicios/spaces.jpg";
import actividades from "../../../public/servicios/activities.jpg";
import talleres from "../../../public/servicios/talleres.jpg";
import acompanamiento from "../../../public/servicios/acompanamiento.jpg";
import whitePhone from "../../../public/white-phone.svg";
import whiteWhats from "../../../public/white-whatsapp.svg";

import Link from "next/link";
// import OnlyOnMobile from "../components/OnlyOnMobile/OnlyOnMobile";

const page = () => {
  return (
    <>
      {/* <OnlyOnMobile /> */}
      <header className="p-2 shadow-lg sticky top-0 bg-white">
        <Image
          src={logoMain}
          alt="Lazox Logo"
          className="w-[150px] mx-auto mb-4"
        />
      </header>

      <main className="container mx-auto px-4 lg:px-10 py-5">
        <h1 className="text-white bg-[var(--secondary)] text-center py-5 rounded-lg mb-4">
          Nuestros Servicios
        </h1>
        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Logoteca con Enfoque en Valores y Propósito
          </h2>

          <Image
            src={ninosFelices}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Biblioteca especializada con literatura seleccionada y clasificada
            según valores logoterapéuticos y etapas de desarrollo. Cada libro
            cuenta con fichas pedagógicas que maximizan su potencial para el
            descubrimiento de sentido.
          </p>

          <ul className="mb-3">
            <li>
              <strong>Para niños:</strong> Cuentos y actividades que fomentan la
              autoconfianza.
            </li>
            <li>
              <strong>Para adolescentes:</strong> Literatura que explora el
              propósito y la identidad.
            </li>
            <li>
              <strong>Para padres y educadores:</strong> Recursos para acompañar
              el desarrollo existencial.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Juegos Educativos para el Desarrollo Emocional
          </h2>

          <Image
            src={logoteca}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Experiencias lúdicas diseñadas por especialistas en logoterapia
            infantil que promueven:
          </p>

          <ul className="mb-3">
            <li>Autoconocimiento y expresión emocional.</li>
            <li>Capacidad de afrontamiento ante desafíos.</li>
            <li>Fortalecimiento de la libertad y responsabilidad personal.</li>
            <li>Descubrimiento de valores personales a través del juego.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Espacios Diseñados para el Crecimiento Personal
          </h2>

          <Image
            src={spaces}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Ambientes cuidadosamente preparados donde cada elemento favorece:
          </p>

          <ul className="mb-3">
            <li>La expresión auténtica.</li>
            <li>El encuentro significativo.</li>
            <li>La exploración segura de emociones.</li>
            <li>El desarrollo de la creatividad y el sentido del humor.</li>
          </ul>

          <p className="mb-3">
            Nuestros espacios físicos están diseñados siguiendo principios
            logoterapéuticos adaptados para diferentes edades.
          </p>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Actividades que Fomentan la Actitud y la Autoconfianza
          </h2>

          <Image
            src={actividades}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">Programas estructurados para desarrollar:</p>

          <ul className="mb-3">
            <li>Autodistanciamiento: capacidad de mirarse a uno mismo.</li>
            <li>
              Autotrascendencia: capacidad de orientarse hacia algo más allá de
              uno mismo.
            </li>
            <li>
              Valores de actitud: transformar situaciones difíciles en
              oportunidades.
            </li>
            <li>
              Fortalecimiento del &#8220;músculo espiritual&#8220; para afrontar
              la incertidumbre.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Talleres para Padres e Hijos
          </h2>

          <Image
            src={talleres}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">Experiencias formativas conjuntas sobre:</p>
          <ul className="mb-3">
            <li>
              Crianza con sentido: Aplicación de principios logoterapéuticos en
              el hogar.
            </li>
            <li>
              Comunicación existencial: Cómo abordar preguntas profundas de los
              niños.
            </li>
            <li>
              Acompañamiento en crisis: Herramientas para momentos difíciles.
            </li>
            <li>
              Fortalecimiento de vínculos: A través del descubrimiento de
              valores compartidos.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[var(--secondary)] mb-3">
            Acompañamiento en la Búsqueda de Propósito
          </h2>

          <Image
            src={acompanamiento}
            alt="Logoteca"
            className="w-full my-5 rounded-lg"
          />

          <p className="mb-3">
            Sesiones individuales y grupales facilitadas por especialistas
            certificados en logoterapia infantil y adolescente:
          </p>
          <ul className="mb-3">
            <li>
              Evaluación mediante la Escala LiReSen y PIL (para diferentes
              edades).
            </li>
            <li>Intervenciones personalizadas según resultados.</li>
            <li>Seguimiento del desarrollo del sentido de vida.</li>
            <li>Apoyo en momentos de crisis existencial.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-[var(--semilleros)] py-10 container mx-auto px-4 lg:px-10 text-white">
        <h2>Información de Contacto</h2>
        <p className="mb-3">
          <strong>Directora: </strong> Dra. Rosa Adelaida Del Valle Puente
        </p>

        <p className="mb-3">
          <strong>Teléfono: </strong>
          <a href="tel:+525530179924">55 3017 9924</a>
        </p>

        <p className="mb-3">
          <strong>Correo: </strong>
          <a href="mailto:rossy@semillerosdesentido.org">
            rossy@semillerosdesentido.org
          </a>
        </p>

        <p className="mb-3">
          <strong>Web: </strong>
          <a href="https://www.semillerosdesentido.org" target="_blank">
            www.semillerosdesentido.org
          </a>
        </p>

        <p className="mb-3 text-center ">
          © 2025 Semilleros de Sentido A.C. Todos los derechos reservados.
        </p>

        <blockquote className="text-center">
          &#8220;Donde cada semilla encuentra su propósito...&#8220;
        </blockquote>
      </footer>

      <article className="fixed bottom-0 left-0 w-full flex flex-col">
        <div className="bg-amber-400 p-2 text-center font-bold">
          Para máyor información
        </div>
        <div className="flex w-full">
          <Link
            href="tel:+5215530179924"
            className="w-1/2 bg-[var(--main)] text-white p-2 text-center flex items-center justify-center"
          >
            <Image
              src={whitePhone}
              alt="Lazox Logo"
              className="w-[20px] mr-2"
            />
            Llámanos
          </Link>

          <Link
            href={
              "https://wa.me/525520802821?text=Hola%20me%20gustaria%20información%20de%20sus%20servicios"
            }
            className="w-1/2 bg-[var(--secondary)] text-white p-2 text-center flex items-center justify-center"
          >
            <Image
              src={whiteWhats}
              alt="Lazox Logo"
              className="w-[20px] mr-2"
            />
            Whatsapp
          </Link>
        </div>
      </article>
    </>
  );
};

export default page;
