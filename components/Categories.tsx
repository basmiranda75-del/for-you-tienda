// components/Categories.tsx
const categorias = [
  { nombre: "Ramos", imagen: "/ramos.jpg" },
  { nombre: "Temporada", imagen: "/temporada.jpg" },
  { nombre: "Promociones", imagen: "/promociones.jpg" },
];

export default function Categories() {
  return (
    <section id="categorias" className="my-10 px-4 sm:px-6 lg:px-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((c, i) => (
          <div key={i} className="rounded overflow-hidden shadow">
            <img
              src={c.imagen}
              alt={c.nombre}
              className="w-full h-48 sm:h-60 md:h-72 object-cover"
            />
            <h3 className="text-center text-lg sm:text-xl font-semibold py-2">{c.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
