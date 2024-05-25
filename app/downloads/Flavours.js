export default function Flavours() {
  return (
    <section className="bg-[#161a1e] pt-4 md:pt-0 px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28">
      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            KDE Plasma
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The Plasma Themed Edition (also known as the Flagship) of Arch Linux
            GUI helps you install Vanilla Arch Linux with the KDE Plasma Desktop
            Environment. It is pre-configured and ready to use. It comes with
            all the necessary software and settings to help users get started
            quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <img
              src="plasma.png"
              alt="KDE Plasma"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/path/to/kde-plasma.iso"
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 hover:opacity-100 rounded-full transition-all"
            >
              Download
            </a>
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <img
            src="plasma.png"
            alt="KDE Plasma"
            className="mx-auto rounded-lg "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-60-40">
        <div className="hidden p-6 text-center rounded-lg md:block">
          <img
            src="gnome.jpg"
            alt="GNOME"
            className="mx-auto mb-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            GNOME
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The GNOME Edition of Arch Linux GUI helps you install Vanilla Arch
            Linux with the GNOME Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="text-center rounded-lg">
            <img
              src="gnome.jpg"
              alt="GNOME"
              className="mx-auto mb-4 rounded-lg md:hidden"
            />
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/path/to/gnome.iso"
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 transition-all hover:opacity-100 rounded-full"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            XFCE
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The XFCE Edition of Arch Linux GUI helps you install Vanilla Arch
            Linux with the XFCE Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <img src="xfce.png" alt="XFCE" className="mx-auto rounded-lg" />
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/path/to/xfce.iso"
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 transition-all hover:opacity-100 rounded-full"
            >
              Download
            </a>
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <img src="xfce.png" alt="XFCE" className="mx-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}
