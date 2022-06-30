import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Cards.css";
import { CardActionArea, IconButton, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WomenCard({ item }) {
  const navigate = useNavigate();
  return (
    <div id="product" className="section-p">
      <div className="pro-container">
        <div className="pro">
          <CardActionArea style={{ borderRadius: "25px" }}>
            <CardMedia
              onClick={() => navigate(`/womens/${item.id}`)}
              component="img"
              src={item.image}
              alt=""
            />
          </CardActionArea>
          <div className="des">
            <span className="sp">{item.subtitle}</span>
            <h5 onClick={() => navigate(`/womens/${item.id}`)}>{item.title}</h5>
            <div>
              <Rating name="size-medium" defaultValue={1} />
            </div>
            <h4>{item.price}$</h4>
          </div>
          <IconButton className="cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className="cart" style={{ marginRight: "35px" }}>
            <FavoriteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
