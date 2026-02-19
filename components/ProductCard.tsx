import React from "react";

interface ProductCardProps {
  nombre: string;
  precio: string;
  imagen: string;
}

export default function ProductCard({ nombre, precio, imagen }: ProductCardProps) {
  return (
    <div className="border rounded shadow p-4 hover:scale-105 transition-transform">
      <img src={imagen} alt={nombre} className="w-full h-40 object-cover rounded"/>
      <h2 className="text-xl font-semibold mt-2">{nombre}</h2>
      <p className="text-green-700 font-bold">{precio}</p>
      <button className="mt-2 w-full bg-green-700 text-white py-1 rounded hover:bg-green-900">Agregar al carrito</button>
    </div>
  );
}
