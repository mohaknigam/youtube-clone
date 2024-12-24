import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import YoutubeIcon from "../../assets/youtubeImage.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Logo = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex  items-center">
      <button onClick={handleToggle}>
        <GiHamburgerMenu className="text-3xl" />
      </button>
      <button>
        <img src={YoutubeIcon} alt="Youtube" className="h-20" />
      </button>
    </div>
  );
};

export default Logo;
