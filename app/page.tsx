// app/page.tsx
"use client";
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Home() {
  const [seccion, setSeccion] = useState("inicio");

  const ramosHome = [
    { nombre: "Ramo Rosas", precio: "S/50", imagen: "/rosas.jpg" },
    { nombre: "Ramo Tulipanes", precio: "S/45", imagen: "/tulipanes.jpg" },
  ];

  const ramosTodos = [
    { nombre: "Ramo Rosas", precio: "S/50", imagen: "/rosas.jpg" },
    { nombre: "Ramo Tulipanes", precio: "S/45", imagen: "/tulipanes.jpg" },
    { nombre: "Ramo Lilies", precio: "S/60", imagen: "/lilies.jpg" },
    { nombre: "Ramo Girasoles", precio: "S/55", imagen: "/girasoles.jpg" },
  ];

  const temporada = [
    { nombre: "Ramo Otoño", precio: "S/50", imagen: "/otono.jpg" },
    { nombre: "Ramo Primavera", precio: "S/55", imagen: "/primavera.jpg" },
  ];

  const promociones = [
    { nombre: "Ramo Especial", precio: "S/75", imagen: "/especial.jpg" },
    { nombre: "Combo Rosas + Chocolates", precio: "S/90", imagen: "/combo.jpg" },
  ];

  return (
    <>
      <Header onChangeSeccion={setSeccion} />

      {seccion === "inicio" && (
        <>
          <Banner />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 sm:px-6 lg:px-10">
            {ramosHome.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </>
      )}

      {seccion === "ramos" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 sm:px-6 lg:px-10">
          {ramosTodos.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      )}

      {seccion === "temporada" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 sm:px-6 lg:px-10">
          {temporada.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      )}

      {seccion === "promociones" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4 sm:px-6 lg:px-10">
          {promociones.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
}


