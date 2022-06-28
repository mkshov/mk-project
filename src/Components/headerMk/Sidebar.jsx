import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { headerContext } from "../contexts/headerContext";

const Sidebar = () => {
  const { sidebar, toggleSidebar } = useContext(headerContext);
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li onClick={() => toggleSidebar()}>
          <HomeRoundedIcon />
          HOME
        </li>
        <li onClick={() => toggleSidebar()}>MENS</li>
        <li onClick={() => toggleSidebar()}>WOMANS</li>
        <li onClick={() => toggleSidebar()}>CART</li>
        <li onClick={() => toggleSidebar()}>ABOUT US</li>
      </div>
    </div>
  );
};

export default Sidebar;
