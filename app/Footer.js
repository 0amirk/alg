import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#161a1e] text-white py-8">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="text-sm">Copyright&copy; ALG Team</div>

        <div className="flex items-center justify-center space-x-8">
          <a href="https://github.com/">
            <Image
              src="/github.svg"
              width={28}
              height={28}
              alt="github.com"
              className=""
            />
          </a>
          <img src="discord.svg" alt="Discord" className="w-7 h-7" />
          <img src="telegram.svg" alt="Telegram" className="w-7 h-7" />
          <img src="instagram.svg" alt="Instagram" className="w-6 h-6" />
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          className="text-white bg-transparent border-[#6a45d1] hover:bg-[#6a45d1] transition-all border-2 rounded-full px-4 py-2"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
