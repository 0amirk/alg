import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "../public/alg-logo.png";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "ALG",
  description: "ALG",
  icons: {
    icon: "../public/alg-logo.png",
    apple: "../public/alg-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/alg-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/alg-logo.png" />
      </Head>
      <body className={poppins.className}>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
