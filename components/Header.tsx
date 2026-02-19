// components/Header.tsx
export default function Header({ onChangeSeccion }: { onChangeSeccion: (s: string) => void }) {
  return (
    <header className="bg-pink-100 p-4 flex flex-col sm:flex-row justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-700 mb-2 sm:mb-0 cursor-pointer" onClick={() => onChangeSeccion("inicio")}>
        For You | Tienda de Regalos
      </div>
      <nav className="space-x-4">
        <button onClick={() => onChangeSeccion("inicio")} className="hover:text-green-900">Inicio</button>
        <button onClick={() => onChangeSeccion("ramos")} className="hover:text-green-900">Ramos</button>
        <button onClick={() => onChangeSeccion("temporada")} className="hover:text-green-900">Temporada</button>
        <button onClick={() => onChangeSeccion("promociones")} className="hover:text-green-900">Promociones</button>
      </nav>
    </header>
  );
}


