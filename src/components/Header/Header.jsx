import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 shadow-lg">
      <Logo />
      <SearchBar />
      <Profile />
    </div>
  );
};

export default Header;
