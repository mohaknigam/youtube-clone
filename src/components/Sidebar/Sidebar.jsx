import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="flex flex-col gap-5 pl-2 pr-5 pt-4 shadow-lg h-full w-48 text-xl">
        <ul className="flex flex-col gap-2">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>

        <div className="">
          <h1 className="font-bold">You</h1>
          <ul>
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>Your Curse</li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
