import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsNew from "./WhatsNew";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhatsNew />
      <Footer />
    </main>
  );
}
