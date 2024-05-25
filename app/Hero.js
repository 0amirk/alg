import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="bg-[#161a1e] text-white pt-36  px-6 sm:px-12 md:px-20 lg:px-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/background.png")',
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 text-5xl font-bold text-center text-white md:text-7xl">
          ARKA LINUX GUI
        </p>
        <p className="mb-5 text-xl text-[#9ca3af] text-center">
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
          TEST TEST TEST
        </p>
        <button className="mb-12 py-3 bg-[#6a45d1] rounded-full px-14">
          Know more
        </button>
        <div className="w-[100%] pt-[56.25%] relative">
          <Image
            src="/arch-linux-gui.png"
            layout="fill"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
