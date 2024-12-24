import React from "react";
import { buttonsList } from "../../utils/constants";
import TopBarButton from "./TopBarButton";
import { v4 as uuidv4 } from "uuid";

const ButtonList = () => {
  return (
    <div className="flex gap-8 p-4">
      {buttonsList.map((btnName) => (
        <TopBarButton key={uuidv4()} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
