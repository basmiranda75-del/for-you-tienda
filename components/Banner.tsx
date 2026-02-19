import React from "react";

export default function Banner() {
  return (
    <section className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/banner-flores.jpg')"}}>
      <div className="bg-white bg-opacity-50 p-6 rounded text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Ramos y regalos especiales</h1>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900">
          Ver productos
        </button>
      </div>
    </section>
  );
}
