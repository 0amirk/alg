import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#161a1e] text-white md:pt-36 sm:px-12 md:px-20 lg:px-28">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-5 text-5xl">ARKA LINUX GUI</p>
        <p className="mb-5 text-xl text-[#c3c4c7]">
          lorem ipsum lorem ipsum lorem ipsum
        </p>
        <button className="mb-12 py-3 bg-[#6a45d1] rounded-full px-14">
          Know more
        </button>
        <div className="w-[100%] pt-[56.25%] relative">
          <Image src="/tcet-linux.png" layout="fill" className="rounded-xl " />
        </div>
      </div>
    </section>
  );
}
