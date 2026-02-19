import React from "react";

export default function Header() {
  return (
    <header className="bg-pink-100 p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold text-green-700">For You | Tienda de regalos</div>
      <nav className="space-x-4">
        <a href="#" className="hover:text-green-900">Inicio</a>
        <a href="#ramos" className="hover:text-green-900">Ramos</a>
        <a href="#temporada" className="hover:text-green-900">Temporada</a>
        <a href="#promociones" className="hover:text-green-900">Promociones</a>
        <a href="#contacto" className="hover:text-green-900">Contacto</a>
      </nav>
      <div className="text-xl cursor-pointer">🛒</div>
    </header>
  );
}
