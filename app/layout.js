import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "../public/alg-logo.png";
import { ScrollProvider } from "./scrollContext";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "ALG",
  description: "ALG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ScrollProvider>{children}</ScrollProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
