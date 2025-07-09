import { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdOutlineLocationCity } from "react-icons/md";

const Home = () => {
  const images = ["/hero-1.png", "/hero-1.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 50000000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#e8dcc4] to-white p-4" id="home">
      {/* Location Select Box */}
      <div className="flex gap-4 xs:pt-4 sm:pt-36 justify-center items-center">
        <div className="xs:flex xs:flex-col sm:flex sm:flex-row xs:gap-6 sm:gap-4">
          <div className="flex justify-between items-center xs:gap-16 sm:gap-0">
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs bg-[#f9f5ef] rounded-2xl">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#6b5c3c]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#6b5c3c" />
                        <stop offset="100%" stopColor="#c5aa70" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <select className="w-full appearance-none border-none bg-[#f9f5ef] text-[#6b5c3c] xs:py-2 sm:py-4 pl-10 pr-8 font-medium rounded-lg shadow-sm focus:outline-none focus:ring-0">
                  <option className="bg-[#f9f5ef] text-[#6b5c3c] font-medium">
                    1208, Spline Arcade, Flat no1...
                  </option>
                  <option className="bg-[#f9f5ef] text-[#6b5c3c] font-medium">
                    1208, Spline Arcade, Flat no2...
                  </option>
                </select>
              </div>
            </div>
            <div className="sm:hidden xs:block p-2 rounded-xl bg-[#f9f5ef]">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#bellGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="bellGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#6b5c3c" />
                    <stop offset="100%" stopColor="#c5aa70" />
                  </linearGradient>
                </defs>
                <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
          </div>
          <div className="relative w-full max-w-sm bg-[#f9f5ef] rounded-2xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
              <FiSearch className="text-2xl font-semibold" />
            </div>
            <input
              type="text"
              placeholder="Search Spa, Services..."
              className="w-full pl-10 font-medium text-gray-400 pr-4 xs:py-2 sm:py-4 border border-none rounded-lg shadow-sm focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="rounded-2xl px-6 py-3 bg-[#f9f5ef] xs:hidden sm:block lg:hidden">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
              SPA
            </span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6b5c3c" />
                  <stop offset="100%" stopColor="#c5aa70" />
                </linearGradient>
              </defs>
              <path d="M3 2v6h6" />
              <path d="M21 12A9 9 0 0 0 6.7 5.1L3 8" />
              <path d="M21 22v-6h-6" />
              <path d="M3 12a9 9 0 0 0 14.3 6.9L21 16" />
            </svg>
          </div>
        </div>
      </div>

      {/* Service Card */}
      <div className="mt-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 p-6">
          <div className="bg-white shadow-md xs:rounded-lg sm:rounded-[2.5rem] xs:p-3 sm:p-6 text-center xs:flex xs:justify-center xs:flex-col sm:flex sm:flex-row items-center xs:gap-2 sm:gap-4  justify-center">
            <img
              src="/salon.png"
              alt="salon"
              className="w-32 xs:w-12 sm:w-14 md:w-20"
            />
            <p className="text-gray-900 font-semibold lg:text-4xl xs:text-base sm:text-xl md:text-2xl">
              Salon
            </p>
          </div>
          <div className="bg-white shadow-md xs:rounded-lg sm:rounded-[2.5rem] xs:p-3 sm:p-6 text-center xs:flex xs:justify-center xs:flex-col sm:flex sm:flex-row items-center xs:gap-2 sm:gap-4 justify-center">
            <img
              src="/spa.png"
              alt="spa"
              className="w-32 xs:w-12 sm:w-14 md:w-20"
            />
            <p className="text-gray-900 font-semibold lg:text-4xl xs:text-base sm:text-xl md:text-2xl">
              SPA
            </p>
          </div>
          <div className="bg-white shadow-md xs:rounded-lg sm:rounded-[2.5rem] xs:p-3 sm:p-6 text-center xs:flex xs:justify-center xs:flex-col sm:flex sm:flex-row items-center xs:gap-2 sm:gap-4  justify-center">
            <img
              src="/clinic.png"
              alt="clinic"
              className="w-32 xs:w-12 sm:w-14 md:w-20"
            />
            <p className="text-gray-900 font-semibold lg:text-4xl xs:text-base sm:text-xl md:text-2xl">
              Clinic
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="mt-4 relative w-full md:max-w-[75rem] mx-auto overflow-hidden rounded-3xl shadow-lg sm:max-w-[50rem]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-full flex-shrink-0 object-cover md:h-[350px] sm:h-[290px]"
            />
          ))}
        </div>

        {/* Custom Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Upcoming Carousel */}
      <div className="sm:hidden xs:block my-8">
        <h1 className="xs:text-xl sm:text-3xl md:text-4xl font-semibold text-gray-700 ">
          Upcomming Apointment
        </h1>

        <div className="mt-4 bg-white relative w-full mx-auto overflow-hidden rounded-3xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="w-full flex flex-col">
              {/* Main content */}
              <div className="flex gap-2 px-2 py-4">
                {/* image and content data */}
                <div className="flex gap-2">
                  <div>
                    <img
                      src="/upcoming.jpg"
                      className="h-20 w-20 flex-shrink-0 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">Oasis Spa Haven</h3>
                    <p className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#storeGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="storeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#6b5c3c" />
                            <stop offset="100%" stopColor="#c5aa70" />
                          </linearGradient>
                        </defs>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                      <span className="text-gray-500 text-sm font-normal tracking-tighter">
                        Lakeside Retreat, Ma...
                      </span>
                    </p>
                    <p className="text-base font-normal text-gray-500 flex items-center gap-2">
                      Haircut, Shaving, Bod...
                    </p>
                  </div>
                </div>

                {/* Timer data */}
                <div className="border-l-2 pl-1 border-dotted">
                  <div className="flexflex-col items-center">
                    <span className="flex gap-2">
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="url(#clockGradient)"
                      >
                        <defs>
                          <linearGradient
                            id="clockGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#6b5c3c" />
                            <stop offset="100%" stopColor="#c5aa70" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
           10-4.48 10-10S17.52 2 12 2zm.75 13H11v-6h1.75v4.25H16V15h-3.25z"
                        />
                      </svg>
                      <span className="text-base font-medium text-gray-900">
                        11:30 AM
                      </span>
                    </span>
                    <span className="text-base font-medium text-gray-400">
                      15 June 22
                    </span>
                  </div>

                  <span className="text-2xl font-semibold text-gray-900">
                    Otp : 1234
                  </span>
                </div>
              </div>
              <div className="flex w-[100%]">
                <div className="w-[100%] py-4 text-center bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70]">
                  <span className="text-xl font-bold text-white">Pay Now</span>
                </div>
                <div className="w-[100%] py-4 bg-white border-2 border-[#c5aa70]">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="url(#clockGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="clockGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#6b5c3c" />
                          <stop offset="100%" stopColor="#c5aa70" />
                        </linearGradient>
                      </defs>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="bg-gradient-to-r from-[#6b5c3c] to-[#c5aa70] bg-clip-text text-transparent">
                      01 Hr 30 Mins
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
