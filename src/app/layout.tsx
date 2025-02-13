import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Hombre en Busca del Sentido - Compra con Descuento | LAZOX",
  description:
    "Consigue 'El Hombre en Busca del Sentido' con un gran descuento. Únete a LAZOX y obtén beneficios exclusivos.",
  keywords: [
    "El Hombre en Busca del Sentido",
    "Libro Viktor Frankl",
    "Comprar libros con descuento",
    "Beneficios LAZOX",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://libro.lazox.com.mx/",
  },
  openGraph: {
    type: "website",
    url: "https://libro.lazox.com.mx/",
    title: "El Hombre en Busca del Sentido - Compra con Descuento | LAZOX",
    description:
      "Consigue 'El Hombre en Busca del Sentido' con un gran descuento. Únete a LAZOX y obtén beneficios exclusivos.",
    images: [
      {
        url: "/lazox-meta-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Portada del libro El Hombre en Busca del Sentido",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Hombre en Busca del Sentido - Compra con Descuento | LAZOX",
    description:
      "Consigue 'El Hombre en Busca del Sentido' con un gran descuento. Únete a LAZOX y obtén beneficios exclusivos.",
    images: ["/lazox-meta-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
