"use client"
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "../public/alg-logo.png";
import { ScrollProvider } from "./scrollContext";
import { useEffect, useState } from "react";
import Loader from "./loader";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleComplete);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ScrollProvider>
          {loading && <Loader />}
          {children}
        </ScrollProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
