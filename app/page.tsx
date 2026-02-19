import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      
      <section id="ramos" className="my-10 px-6 grid grid-cols-3 gap-6">
        <ProductCard nombre="Ramo Rosas" precio="S/50" imagen="/rosas.jpg" />
        <ProductCard nombre="Ramo Tulipanes" precio="S/45" imagen="/tulipanes.jpg" />
        <ProductCard nombre="Ramo Lilies" precio="S/60" imagen="/lilies.jpg" />
      </section>

      <Categories />

      <Footer />
    </>
  );
}

