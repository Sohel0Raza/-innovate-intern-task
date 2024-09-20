import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <div>
     
      <div className="flex justify-between items-center z-50 text-white ">
        <div className="w-1/2">
          <ul className="flex items-center justify-between py-10 px-2">
            <li className="flex items-center cursor-pointer">
              Home <IoIosArrowDown className="ml-2 text-xl" />
            </li>
            <li className="flex items-center">
              Event <IoIosArrowDown className="ml-2 text-xl" />
            </li>
            <li className="flex items-center">
              Contact <IoIosArrowDown className="ml-2 text-xl" />
            </li>
            <li className="flex items-center">
              Blog <IoIosArrowDown className="ml-2 text-xl" />
            </li>
          </ul>
        </div>
        <div className="w-1/2 text-end relative text-black">
          <input
            className="py-2 px-4 md:w-[48%]  rounded-full focus:outline-none  mx-2"
            type="text"
            placeholder="Search"
          />
          <IoIosSearch className="absolute top-1/2 -translate-y-[50%] right-4 text-3xl " />
        </div>
      </div>
    </div>
  );
}
