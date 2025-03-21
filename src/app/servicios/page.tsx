import Image from "next/image";
import React from "react";
import logoMain from "../../../public/logo-main.svg";

const page = () => {
  return (
    <>
      <header className="p-2 shadow-lg sticky top-0 bg-white">
        <Image
          src={logoMain}
          alt="Lazox Logo"
          className="w-[150px] mx-auto mb-4"
        />
      </header>

      <main className="container mx-auto px-4 lg:px-10 ">
        <h1 className="text-[var(--secondary)]">Nuestros Servicios</h1>
        <section>
          <h2>Logoteca con Enfoque en Valores y Propósito</h2>
          <p>
            Biblioteca especializada con literatura seleccionada y clasificada
            según valores logoterapéuticos y etapas de desarrollo. Cada libro
            cuenta con fichas pedagógicas que maximizan su potencial para el
            descubrimiento de sentido.
          </p>
          <ul>
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
          <h2>Juegos Educativos para el Desarrollo Emocional</h2>
          <p>
            Experiencias lúdicas diseñadas por especialistas en logoterapia
            infantil que promueven:
          </p>
          <ul>
            <li>Autoconocimiento y expresión emocional.</li>
            <li>Capacidad de afrontamiento ante desafíos.</li>
            <li>Fortalecimiento de la libertad y responsabilidad personal.</li>
            <li>Descubrimiento de valores personales a través del juego.</li>
          </ul>
        </section>

        <section>
          <h2>Espacios Diseñados para el Crecimiento Personal</h2>
          <p>
            Ambientes cuidadosamente preparados donde cada elemento favorece:
          </p>
          <ul>
            <li>La expresión auténtica.</li>
            <li>El encuentro significativo.</li>
            <li>La exploración segura de emociones.</li>
            <li>El desarrollo de la creatividad y el sentido del humor.</li>
          </ul>
          <p>
            Nuestros espacios físicos están diseñados siguiendo principios
            logoterapéuticos adaptados para diferentes edades.
          </p>
        </section>

        <section>
          <h2>Actividades que Fomentan la Actitud y la Autoconfianza</h2>
          <p>Programas estructurados para desarrollar:</p>
          <ul>
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
              Fortalecimiento del "músculo espiritual" para afrontar la
              incertidumbre.
            </li>
          </ul>
        </section>

        <section>
          <h2>Talleres para Padres e Hijos</h2>
          <p>Experiencias formativas conjuntas sobre:</p>
          <ul>
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
          <h2>Acompañamiento en la Búsqueda de Propósito</h2>
          <p>
            Sesiones individuales y grupales facilitadas por especialistas
            certificados en logoterapia infantil y adolescente:
          </p>
          <ul>
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

      <footer className="bg-[var(--semilleros)]">
        <h2>Información de Contacto</h2>
        <p>
          <strong>Directora:</strong> Dra. Rosa Adelaida Del Valle Puente
        </p>
        <p>
          <strong>Teléfono:</strong>
          <a href="tel:+525530179924">55 3017 9924</a>
        </p>
        <p>
          <strong>Correo:</strong>
          <a href="mailto:rossy@semillerosdesentido.org">
            rossy@semillerosdesentido.org
          </a>
        </p>
        <p>
          <strong>Web:</strong>
          <a href="https://www.semillerosdesentido.org" target="_blank">
            www.semillerosdesentido.org
          </a>
        </p>
        <p>© 2025 Semilleros de Sentido A.C. Todos los derechos reservados.</p>
        <blockquote>"Donde cada semilla encuentra su propósito..."</blockquote>
      </footer>
    </>
  );
};

export default page;
