import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Body = () => (
  <div className="flex h-full">
    <Sidebar />
    <Outlet />
  </div>
);

export default Body;
