import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsNew from "./WhatsNew";
import Testi from "./Testi";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhatsNew />
      <Testi />
      <Footer />
    </main>
  );
}
