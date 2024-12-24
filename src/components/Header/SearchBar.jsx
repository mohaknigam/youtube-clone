import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex justify-center w-1/2 items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-1/2 h-10 focus:outline-none border border-gray-300 rounded-l-full px-5 text-xl"
      />
      <button className="bg-gray-200 h-10 w-16 rounded-r-full flex justify-center items-center border border-gray-300">
        <IoIosSearch className="text-2xl" />
      </button>
    </div>
  );
};

export default SearchBar;
