"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const burgerClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section className="absolute w-full mt-8">
      {navOpen && (
        <Modal onClose={burgerClick}>
          <div className="flex flex-col items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Tutorials
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Support
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Sourceforge
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              OSDN
            </a>
            <Link
              href="/downloads"
              className="px-4 py-2 bg-[#161a1e] rounded-3xl text-white"
            >
              Downloads
            </Link>
          </div>
        </Modal>
      )}
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-8 py-4 rounded-full w-[80%] bg-white">
          <Link href="/">
            <div className="items-center hidden gap-1 md:flex">
              <Image
                src="/alg-logo.png"
                width={40}
                height={40}
                alt="ALG Logo"
              />
              <div className="flex font-bold">
                <p className="text-[25px]">A</p>
                <p className="text-[25px] text-[#6a45d1]">L</p>
                <p className="text-[25px]">G</p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:hidden">
              <Image
                src="/alg-logo.png"
                width={35}
                height={35}
                alt="ALG Logo"
              />
              <div className="flex font-bold">
                <p className="text-[22px]">A</p>
                <p className="text-[22px] text-[#6a45d1]">L</p>
                <p className="text-[22px]">G</p>
              </div>
            </div>
          </Link>
          <button
            onClick={burgerClick}
            className={`md:hidden ${navOpen ? "rotate-180" : "rotate-0"}`}
          >
            <Image src="/hamburger.svg" height={30} width={30} />
          </button>
          <div className="items-center hidden gap-4 md:flex">
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Tutorials
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Support
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              Sourceforge
            </a>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUPcmlja3JvbGwgbm8gYWRz"
              className="hover:text-[#6a45d1]"
            >
              OSDN
            </a>
            <Link
              href="/downloads"
              className="px-4 py-2 bg-[#161a1e] rounded-3xl text-white"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
