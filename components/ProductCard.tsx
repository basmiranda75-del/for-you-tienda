// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  nombre: string;
  precio: string;
  imagen: string;
  onAdd?: () => void;
}

export default function ProductCard({ nombre, precio, imagen, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col transform transition-transform duration-200 hover:scale-95">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-48 sm:h-60 md:h-72 object-cover rounded mb-2"
      />
      <h3 className="text-lg sm:text-xl font-semibold">{nombre}</h3>
      <p className="text-green-700 font-bold">{precio}</p>
      <button
        className="mt-2 w-full sm:w-auto bg-green-700 text-white py-2 px-4 rounded hover:bg-green-900"
        onClick={onAdd ? onAdd : () => alert(`Agregaste ${nombre} al carrito`)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

