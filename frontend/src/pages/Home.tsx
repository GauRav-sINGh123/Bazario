import { Navbar, Hero, ProductGrid, Footer } from "../components/index";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
