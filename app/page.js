import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
    </main>
  );
}
