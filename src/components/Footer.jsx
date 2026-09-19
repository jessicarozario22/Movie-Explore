
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

         
          <div className="text-lg font-bold text-white">
             Movie<span className="text-orange-500">Explorer</span>
          </div>

        
          <p className="text-sm text-center">
            © 2026 MovieExplorer. All rights reserved.
          </p>

          <a
            href="https://github.com/jessicarozario22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-7 h-7 invert group-hover:scale-110 transition duration-300"
            />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

