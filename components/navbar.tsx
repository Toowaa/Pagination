export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto ">
      <nav className="flex items-center px-6 py-4 text-sm font-light justify-between text-theme-raisin-black max-w-6xl mx-auto">
        <div className="hidden md:flex flex-row gap-8 justify-start">
          <a
            href="https://github.com/Toowaa/Pagination"
            className="relative group inline-block "
          >
            Repositorio <strong>AQUI</strong>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/brahanbonilla/"
            className="relative inline-block group   "
          >
            <strong>LinkedLn</strong>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="hidden md:flex flex-row gap-8 justify-end">
          <a
            href="mailto:brahanbonilla@gmail.com"
            className="relative inline-block group animate-bounce"
          >
            Contact <strong>ME</strong>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </nav>
    </header>
  );
};
