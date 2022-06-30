import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { headerContext } from "../../contexts/headerContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { sidebar, toggleSidebar } = useContext(headerContext);
  const navigate = useNavigate();
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li onClick={() => toggleSidebar()}>
          <HomeRoundedIcon />
          HOME
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/mens`);
          }}
        >
          MENS
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/womens`);
          }}
        >
          WOMANS
        </li>
        <li onClick={() => toggleSidebar()}>CART</li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/add-for-mens`);
          }}
        >
          ADD FOR MEN'S
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
