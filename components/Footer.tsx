// components/Footer.tsx
export default function Footer() {
  const redes = [
    { nombre: "Facebook", url: "https://facebook.com", icono: "📘" },
    { nombre: "Instagram", url: "https://instagram.com", icono: "📸" },
    { nombre: "TikTok", url: "https://tiktok.com", icono: "🎵" },
  ];

  const politicas = ["Política de privacidad", "Términos de servicio", "Envíos y devoluciones"];

  return (
    <footer className="bg-pink-100 text-green-700 py-6 px-4 sm:px-6 lg:px-10 mt-10">
      <div className="text-center mb-4">
        <p>© 2026 For You | Tienda de Regalos</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-10">
        {redes.map((r, i) => (
          <a key={i} href={r.url} target="_blank" className="flex flex-col items-center hover:underline">
            <span className="text-2xl">{r.icono}</span>
            <span className="text-sm">{r.nombre}</span>
          </a>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4 text-sm">
        {politicas.map((p, i) => (
          <span key={i}>{p}</span>
        ))}
      </div>
    </footer>
  );
}
