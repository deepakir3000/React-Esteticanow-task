import { HiMiniHeart } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoStarFill } from "react-icons/go";
import { MdOutlineLocationCity } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";
import storeList from "../data/stores";
import { IoIosArrowRoundForward } from "react-icons/io";

const Services = () => {
  return (
    <div className="sm:mt-6 xs:pb-32 sm:pb-0 sm:p-10 xs:p-1 bg-[url('/Vector.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between py-4 px-6">
        <h1 className="xs:text-xl sm:text-3xl md:text-4xl font-semibold text-gray-700 ">
          Featured
        </h1>

        <span className="flex gap-1 items-center">
          <span className="text-base font-semibold text-gray-900 xs:text-sm">
            View all
          </span>
          <IoIosArrowRoundForward className="text-4xl font-semibold text-[#b7995b] xs:text-2xl" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:p-6 xl:grid-cols-4 xs:gap-4 xs:p-2">
        {storeList.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className=" xs:flex sm:flex-col">
              <div className="relative">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-48 xs:w-32 sm:w-full xs:h-32 object-cover rounded-2xl"
                />
                <div className="hidden sm:block sm:absolute sm:bottom-2 sm:left-2 sm:w-11/12 w-full bg-[#1a1a19d1] text-[#3dcb1d] text-xs px-2 py-1 rounded-full shadow">
                  <div className="flex items-center gap-1">
                    <RiDiscountPercentFill />
                    <span>{store.discount}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 xs:p-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="xs:text-sm sm:text-base font-semibold">
                      {store.name}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MdOutlineLocationCity className="text-gray-500 text-lg" />{" "}
                      <span className="text-gray-500 sm:text-sm xs:text-xs tracking-tighter">
                        {store.location}
                      </span>
                    </p>
                  </div>
                  {store.like === "yes" ? (
                    <HiMiniHeart className=" text-[#b7995b] text-3xl cursor-pointer mt-1" />
                  ) : (
                    <TiHeartOutline className=" text-gray-600 text-3xl cursor-pointer mt-1" />
                  )}
                </div>

                <div className="flex xs:gap-3 sm:gap-0 sm:flex-row xs:flex-col-reverse xs:items-start justify-between items-center text-xs text-gray-500">
                  <span className="flex gap-4">
                    <span className="font-normal flex items-center gap-2">
                      <GoStarFill className="text-yellow-300 text-base" />{" "}
                      <span className="text-gray-600 text-sm">
                        {store.rating}
                      </span>
                    </span>
                    <span className="font-normal flex items-center gap-2">
                      <HiOutlineLocationMarker className="text-gray-700 text-base" />
                      <span className="text-gray-600 text-sm">
                        {store.distance}
                      </span>
                    </span>
                  </span>
                  <span className="font-normal text-sm">{store.gender}</span>
                </div>
              </div>
            </div>
            <div className="sm:hidden xs:block w-full text-[#3dcb1d] text-xs px-2 py-1">
              <div className="flex items-center gap-1">
                <RiDiscountPercentFill />
                <span>{store.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
