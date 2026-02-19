import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white p-6 mt-10">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" className="rounded-full bg-white text-green-700 w-10 h-10 flex items-center justify-center hover:bg-green-200">📸</a>
        <a href="#" className="rounded-full bg-white text-green-700 w-10 h-10 flex items-center justify-center hover:bg-green-200">🎵</a>
        <a href="#" className="rounded-full bg-white text-green-700 w-10 h-10 flex items-center justify-center hover:bg-green-200">💬</a>
      </div>
      <p className="text-center text-sm">© 2026 For You | Política de privacidad y términos de compra</p>
    </footer>
  );
}
