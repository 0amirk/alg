import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#161a1e] text-white py-8">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="text-[12px] md:text-sm">Copyright &copy; ALG Team</div>

        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          <a href="https://github.com/" target="_blank">
            <Image src="/github.svg" width={28} height={28} alt="Github" />
          </a>
          <a href="https://github.com/" target="_blank">
            <Image src="/discord.svg" width={28} height={28} alt="Discord" />
          </a>{" "}
          <a href="https://github.com/" target="_blank">
            <Image src="/telegram.svg" width={28} height={28} alt="Telegram" />
          </a>{" "}
          <a href="https://github.com/" target="_blank">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </a>
        </div>

        <a
          href="https://github.com/"
          className="text-white  hidden bg-transparent border-[#6a45d1] hover:bg-[#6a45d1] transition-all border-2 rounded-full px-4 py-2"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
