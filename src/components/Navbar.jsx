import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RiHome5Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline, MdQrCodeScanner } from "react-icons/md";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "Home", path: "home", icon: <RiHome5Line /> },
    { link: "Search", path: "search", icon: <FiSearch /> },
    { link: "Reels", path: "reels", icon: <BiMoviePlay /> },
    { link: "Cart", path: "cart", icon: <IoCartOutline /> },
    { link: "Login", path: "login", icon: <MdOutlinePersonOutline /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="w-full bg-[#ece2cf] md:bg-transparent fixed top-0 left-0 right-0 hidden xs:hidden sm:block">
        <nav
          className={`py-4 lg:px-14 px-4 ${
            isSticky
              ? "sticky top-0 left-0 right-0 border-b bg-[#ece2cf] duration-300"
              : "bg-[#ece2cf]"
          }`}
        >
          <div className="flex justify-between items-center text-base gap-8">
            <a
              href="#"
              className="text-2xl font-semibold flex items-center space-x-1"
            >
              <span className="bg-[#b9af9b] px-24 py-5 sm:px-10 sm:py-3 rounded-[30%]"></span>
            </a>
            <ul className="flex space-x-12 sm:space-x-4 md:space-x-5">
              {navItems.map(({ link, path, icon }) => (
                <Link
                  key={path}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="flex items-center gap-2 text-base text-Gray900 hover:text-[#C1A15F] first:font-medium cursor-pointer"
                >
                  <span className="text-2xl sm:text-base md:text-xl">
                    {icon}
                  </span>
                  <span className="text-base sm:text-xs md:text-sm">
                    {link}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md border-gray-300 rounded-md border-t flex justify-between items-center px-6 py-2 sm:hidden xs:flex">
        <div className="flex gap-8 items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-4xl flex flex-col items-center text-gray-700 hover:text-[#C1A15F]"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="url(#homeGradient)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="homeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6b5c3c" />
                  <stop offset="100%" stopColor="#c5aa70" />
                </linearGradient>
              </defs>
              <path d="M12 3l8 7v11a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1V10l8-7z" />
            </svg>

            <span className="text-base bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
              Home
            </span>
          </Link>
          <Link
            to="search"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-4xl flex flex-col items-center text-gray-700 hover:text-[#C1A15F]"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#reelsGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="reelsGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6b5c3c" />
                  <stop offset="100%" stopColor="#c5aa70" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <path d="M3 7h18" />
              <path d="M7 3l4 4" />
              <path d="M13 3l4 4" />
              <polygon points="10 12 15 15 10 18 10 12" />
            </svg>

            <span className="text-base bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
              Reels
            </span>
          </Link>
        </div>

        {/* Center QR Scanner Floating Button */}
        <div className="relative flex flex-col items-center">
          <button className="w-14 h-14 rounded-full bg-[#C1A15F] text-white flex items-center justify-center shadow-md shadow-white -mt-10 border-4 border-[#ece2cf]">
            <MdQrCodeScanner className="text-3xl" />
          </button>
          <span className="text-base bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
            QR
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            to="reels"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-4xl flex flex-col items-center text-gray-700 hover:text-[#C1A15F]"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#historyGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="historyGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6b5c3c" />
                  <stop offset="100%" stopColor="#c5aa70" />
                </linearGradient>
              </defs>
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0-2.02-9.36" />
              <polyline points="12 7 12 12 16 14" />
            </svg>

            <span className="text-base bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
              History
            </span>
          </Link>
          <Link
            to="cart"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-4xl flex flex-col items-center text-gray-700 hover:text-[#C1A15F]"
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#profileGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="profileGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6b5c3c" />
                  <stop offset="100%" stopColor="#c5aa70" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
            </svg>

            <span className="text-base bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
              Profile
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
