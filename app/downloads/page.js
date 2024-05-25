import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Downloads() {
  return (
    <div className="min-h-screen  bg-[#161a1e] ">
    <Navbar />
      <Head>
        <title>Download Page</title>
      </Head>
      <div className="container mx-auto px-4 md:pt-36 sm:px-12 md:px-20 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#FFFFFF] p-6 rounded-lg">
            <h2 className="text-2xl text-gray-800 font-bold mb-4">Requirements</h2>
            <p className='text-gray-600'><strong>Minimum:</strong></p>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>64 bit x86_64 processor (Intel/AMD), with at least 2 CPU cores. (32-bit not supported)</li>
              <li>Any GPU/IGP with OpenGL 3.3+ support.</li>
              <li>At least 2GB DDR3/DDR4 RAM.</li>
              <li>At least 10GB HDD/SSD storage.</li>
              <li>Basic WPA/WPA2 compatible wifi card or ethernet supported motherboard.</li>
            </ul>
            <p className='text-gray-600'><strong>Recommended (Themed Edition):</strong></p>
            <ul className="list-disc list-inside text-gray-600">
              <li>64 bit x86_64 processor (Intel/AMD), with at least 4 CPU cores. (32-bit not supported)</li>
              <li>Any GPU/IGP with OpenGL 3.3+ support.</li>
              <li>4-8GB DDR3/DDR4 RAM.</li>
              <li>50GB HDD/SSD space (more the better).</li>
              <li>WiFi and Ethernet Card.</li>
            </ul>
          </div>
          <div className="bg-[#ac89b6] p-6 rounded-lg">
            <h2 className="text-2xl text-gray-800 font-bold mb-4">General Instructions</h2>
            <p className='text-white'><strong>Make Bootable USB:</strong></p>
            <ul className="list-disc list-inside mb-4 text-white">
              <li>Linux: Watch this video for Command Line DD method or watch the video with Balena Etcher.</li>
              <li>Windows: Watch either one of these videos: With Rufus or With Balena Etcher</li>
              <li>MacOS: Watch this video.</li>
              <li>Watch tutorials on the Tutorials page for installation guide.</li>
              <li>Dual/Multi Boot: Watch these videos.</li>
              <li>Don't forget to verify your download.</li>
              <li>Optionally, view full changelog.</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-40-60 gap-6 mb-12">
  <div className="p-6 rounded-lg flex flex-col justify-center">
    <h2 className="text-6xl font-bold mb-4 text-white">KDE Plasma</h2>
    <p className="mb-4 text-lg text-gray-400 leading-relaxed">
      The Plasma Themed Edition (also known as the Flagship) of Arch Linux GUI helps you install Vanilla Arch Linux with the KDE Plasma Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly.
    </p>
    <div className="flex justify-center mt-6">
      <a
        href="/path/to/kde-plasma.iso"
        download
        className="hover:bg-purple-800 text-white py-4 px-8 bg-[#6a45d1] rounded-full"
      >
        Download
      </a>
    </div>
  </div>
  <div className="p-6 rounded-lg text-center flex items-center">
    <img src="plasma.png" alt="KDE Plasma" className="mx-auto rounded-lg" />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-60-40 gap-6 mb-12">
  <div className="p-6 rounded-lg text-center">
    <img src="gnome.jpg" alt="GNOME" className="mx-auto mb-4 rounded-lg" />
  </div>
  <div className="p-6 rounded-lg flex flex-col justify-center">
    <h2 className="text-6xl font-bold mb-4 text-white">GNOME</h2>
    <p className="mb-4 text-lg text-gray-400 leading-relaxed">
      The GNOME Edition of Arch Linux GUI helps you install Vanilla Arch Linux with the GNOME Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly.
    </p>
    <div className="flex justify-center mt-6">
      <a
        href="/path/to/gnome.iso"
        download
        className="hover:bg-purple-800 text-white py-4 px-8 bg-[#6a45d1] rounded-full"
      >
        Download
      </a>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-40-60 gap-6 mb-12">
  <div className="p-6 rounded-lg flex flex-col justify-center">
    <h2 className="text-6xl font-bold mb-4 text-white">XFCE</h2>
    <p className="mb-4 text-lg text-gray-400 leading-relaxed">
      The XFCE Edition of Arch Linux GUI helps you install Vanilla Arch Linux with the XFCE Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly.
    </p>
    <div className="flex justify-center mt-6">
      <a
        href="/path/to/xfce.iso"
        download
        className="hover:bg-purple-800 text-white py-4 px-8 bg-[#6a45d1] rounded-full"
      >
        Download
      </a>
    </div>
  </div>
  <div className="p-6 rounded-lg text-center flex items-center">
    <img src="xfce.png" alt="XFCE" className="mx-auto rounded-lg" />
  </div>
</div>


      <Footer/>
      </div>
    </div>
  );
}
