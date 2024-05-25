"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
export default function Testi() {
  return (
    <section className="px-6 py-6 text-black bg-white md:py-10 sm:px-12 md:px-20 lg:px-28">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-4 text-3xl font-bold md:text-5xl">Testimonials</p>
        <div className="bg-[#f6f5f5] px-4 py-8 md:p-12 rounded-2xl w-full">
          <Splide
            options={{
              autoplay: false,
              arrows: true,
              drag: false,
              perPage: 1,
            }}
          >
            <SplideSlide>
              <div className="flex items-center justify-center">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/xvFZjo5PgG0?si=zzZlCnCaslBPtimk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[550px] rounded-2xl"
                ></iframe>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex items-center justify-center">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/xvFZjo5PgG0?si=zzZlCnCaslBPtimk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[550px] rounded-2xl"
                ></iframe>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
