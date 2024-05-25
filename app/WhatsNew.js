import Image from "next/image";
export default function WhatsNew() {
  return (
    <section className="px-6 py-6 text-black bg-white md:py-10 sm:px-12 md:px-20 lg:px-28 ">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-3xl font-bold md:text-5xl">What&#39;s New?</p>
        <p className="max-w-xl mb-10 text-center md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          fermentum orci eu tellus maximus, ac aliquet turpis mollis.
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/xfce.png"
              width={400}
              height={400}
              className="rounded-xl"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/xfce.png"
              width={400}
              height={400}
              className="rounded-xl"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border-opacity-10 border-b-2 border-r-2 border-l-2 border-[#9ca3af]">
            <Image
              src="/xfce.png"
              width={400}
              height={400}
              className="rounded-xl"
            />
            <p className="text-xl font-bold max-w-[400px] text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
