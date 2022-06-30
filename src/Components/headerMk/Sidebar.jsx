import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { headerContext } from "../../contexts/headerContext";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Button } from "@mui/material";

const Sidebar = () => {
  const { user, logOut } = useContext(authContext);
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
        {user ? (
          <Button>{user.email}</Button>
        ) : (
          <Button
            onClick={() => {
              navigate(`/log-in`);
            }}
          >
            Login
          </Button>
        )}
        {user ? (
          <Button
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
