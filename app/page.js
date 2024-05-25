import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DownloadPage from './downloads/page'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Footer />
      <DownloadPage />
    </main>
  );
}
