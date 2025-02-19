"use client";
import Image from "next/image";
import React, { useState } from "react";
import loader from "../../../../public/loader.svg";
import { div } from "framer-motion/client";

interface FormState {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
  origen: string;
}

const NewsLetterForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    origen: "Landing Libro Viktor Frankl",
  });

  const [mensaje, setMensaje] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://semilleros-lazox-newsletter.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMensaje("¡Registro exitoso!");
        setForm({
          nombre: "",
          correo: "",
          telefono: "",
          mensaje: "",
          origen: "Web Semilleros",
        });
        setLoading(false);
      } else {
        setMensaje(data.error || "Error en el registro");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error de conexión con el servidor");
    }
  };

  return (
    <>
      <form
        className="flex flex-col p-3 mx-auto w-[80%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleInputChange}
          className="bg-white font-bold pl-10 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu nombre"
          required
        />

        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleInputChange}
          pattern="\d{10}"
          maxLength={10}
          title="Debe ser un número de 10 dígitos"
          className="bg-white font-bold pl-10 border border-gray-300 text-gray-900 text-base rounded-full focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu teléfono"
          required
        />

        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleInputChange}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Debe ser un correo electrónico válido (ejemplo@dominio.com)"
          className="bg-white font-bold pl-10 border border-gray-300 text-gray-900 text-base rounded-full focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          placeholder="Escribe tu correo electrónico"
          required
        />

        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleInputChange}
          placeholder="Déjanos un mensaje"
          className="bg-white font-bold pl-10 border border-gray-300 text-gray-900 text-base rounded-3xl focus:ring-main focus:border-main block w-full p-2.5 mb-4"
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="text-white rounded-full bg-secondary hover:bg-main transition-colors focus:ring-4 focus:ring-blue-300  text-lg px-5 py-2.5 me-2 mb-2 font-bold"
        >
          {loading === true ? (
            <Image
              src={loader}
              className="animate-spin w-8 mx-auto"
              alt="Cargando Servicio"
            />
          ) : (
            "Enviar mensaje"
          )}
        </button>

        {mensaje && (
          <div className="mt-2 rounded bg-secondary py-5 font-bold">
            <p className="text-center text-white">{mensaje}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default NewsLetterForm;
