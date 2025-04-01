
export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto ">
        <nav
         className="flex items-center px-6 py-4 text-sm font-light justify-between max-w-6xl mx-auto"
        >
            <div className="hidden md:flex flex-row gap-8 justify-start">
                <a href="/github.com/brahan/pagination"
                    className="inline-block hover:underline"
                >
                    Aqui <strong>AQUI</strong> 
                </a>
                <a href="/github.com/brahan/pagination"
                    className="inline-block hover:underline"
                >
                    <strong>CV</strong>
                </a>
               
            </div>
            <div className="hidden md:flex flex-row gap-8 justify-end">
            <a href="/github.com/brahan/pagination"
                    className="inline-block hover:underline"
                >
                    Contact <strong>ME</strong>
                </a>
            </div>
        </nav>
    </header>
  );
};