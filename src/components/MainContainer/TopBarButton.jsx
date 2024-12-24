import React from "react";

const TopBarButton = ({ name }) => {
  return (
    <div className="py-2 px-4 text-lg bg-gray-200 font-semibold rounded-lg">
      {name}
    </div>
  );
};

export default TopBarButton;
