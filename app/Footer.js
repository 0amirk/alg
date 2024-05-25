export default function Footer() {
    return (
      <div className="bg-[#161a1e] text-white py-8">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-sm">Copyright&copy; ALG Team</div>
          
          <div className="flex justify-center items-center space-x-4">
            <img src="github.png" alt="GitHub.com" className="w-6 h-6" />
            <img src="discord.png" alt="Discord" className="w-6 h-6" />
            <img src="telegram.png" alt="Telegram" className="w-6 h-6" />
            <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
          </div>
          
          <a href="https://github.com/your-github-repo" className="text-[#c3c4c7] bg-[#6a45d1] hover:text-gray-400 border-[#6a45d1] rounded-full px-4 py-2">
          GitHub
        </a>
        </div>
      </div>
    );
  }
  