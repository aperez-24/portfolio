import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Proyectos from "@/components/Proyectos";
import Contacto  from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </main>
  );
}