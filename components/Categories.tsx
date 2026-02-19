import React from "react";

export default function Categories() {
  return (
    <section className="my-10 grid grid-cols-3 gap-4 text-center">
      <div className="bg-pink-200 p-6 rounded hover:scale-105 transition-transform cursor-pointer">
        <img src="/ramos.jpg" alt="Ramos" className="mx-auto mb-2 h-32 object-cover"/>
        <h3 className="font-bold text-green-800">Ramos</h3>
      </div>
      <div className="bg-pink-200 p-6 rounded hover:scale-105 transition-transform cursor-pointer">
        <img src="/temporada.jpg" alt="Flores de Temporada" className="mx-auto mb-2 h-32 object-cover"/>
        <h3 className="font-bold text-green-800">Temporada</h3>
      </div>
      <div className="bg-pink-200 p-6 rounded hover:scale-105 transition-transform cursor-pointer">
        <img src="/promociones.jpg" alt="Promociones" className="mx-auto mb-2 h-32 object-cover"/>
        <h3 className="font-bold text-green-800">Promociones</h3>
      </div>
    </section>
  );
}
