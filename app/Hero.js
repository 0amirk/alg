import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="bg-[#161a1e] text-white pt-36  px-6 sm:px-12 md:px-20 lg:px-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/background.png")',
        imageRendering: "pixelated",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-5 text-5xl font-bold text-center text-white md:text-7xl">
          ARKA <span className="text-[#6a45d1]">LINUX</span> GUI
        </h2>
        <p className="mb-5 text-xl text-[#d4d4d4] text-center">
          ALG is a fast, offline graphical installer for Arch Linux!
        </p>
        <button className="mb-10 py-3 bg-[#6a45d1] rounded-full px-14">
          Know more
        </button>
        <div className="w-[100%] relative">
          <Image
            src="/arch-linux-gui.png"
            width={1920}
            height={1080}
            className="rounded-tl-xl rounded-tr-xl"
          />
        </div>
      </div>
    </section>
  );
}
