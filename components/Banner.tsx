// components/Banner.tsx
export default function Banner() {
  return (
    <section className="bg-pink-100 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
        ¡Gracias por elegir For You!
      </h1>
      <p className="text-lg sm:text-xl text-green-900 max-w-xl">
        Nuestra tienda de regalos y flores está aquí para llenar tus momentos especiales de alegría.
      </p>
    </section>
  );
}
