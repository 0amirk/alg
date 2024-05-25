import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
