"use client";

import React, { useState, useEffect } from "react";

const PingComponent = () => {
  const serviceURL = "https://semilleros-lazox-newsletter.onrender.com/ping";
  const [mensaje, setMensaje] = useState("⌛");

  const fetchData = async () => {
    try {
      const res = await fetch(serviceURL);

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setMensaje(data);
      setTimeout(() => {
        setMensaje("");
      }, 2000);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="fixed right-0 top-0">{mensaje}</div>;
};

export default PingComponent;
