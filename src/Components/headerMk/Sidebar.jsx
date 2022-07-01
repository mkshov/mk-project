import React, { useContext } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { headerContext } from "../../contexts/headerContext";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar = () => {
  const { user, logOut } = useContext(authContext);
  const { sidebar, toggleSidebar } = useContext(headerContext);
  const navigate = useNavigate();
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar-container">
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/`);
          }}
        >
          HOME <ArrowForwardIosIcon />
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/mens`);
          }}
        >
          MENS <ArrowForwardIosIcon />
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/womens`);
          }}
        >
          WOMANS <ArrowForwardIosIcon />
        </li>
        <li onClick={() => toggleSidebar()}>
          CART
          <ArrowForwardIosIcon />
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/add-for-mens`);
          }}
        >
          ADD FOR MEN'S <ArrowForwardIosIcon />
        </li>
        <li
          onClick={() => {
            toggleSidebar();
            navigate(`/add-for-womens`);
          }}
        >
          ADD FOR WOMEN'S <ArrowForwardIosIcon />
        </li>
        {user ? (
          <li className="auth">
            <Button
              variant="outlined"
              style={{
                borderRadius: "20px",
                color: "black",
                border: "1px solid black",
              }}
              onClick={() => {
                logOut();
              }}
            >
              Log out
            </Button>
          </li>
        ) : (
          <li className="auth">
            <Button
              variant="outlined"
              style={{
                borderRadius: "20px",
                color: "black",
                border: "1px solid black",
              }}
              onClick={() => {
                {
                  navigate(`/log-in`);
                  toggleSidebar();
                }
              }}
            >
              Log In
            </Button>
          </li>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
