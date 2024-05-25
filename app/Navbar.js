import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <section className="absolute w-full mt-8">
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-8 py-4 rounded-full w-[80%] bg-white">
          <Link href="/">
            <div className="flex items-center gap-1">
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
          </Link>
          <div className="flex items-center gap-4">
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
