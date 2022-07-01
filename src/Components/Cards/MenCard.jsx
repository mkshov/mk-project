import React, { useContext, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import BookmarkRemoveSharpIcon from "@mui/icons-material/BookmarkRemoveSharp";
import "./Cards.css";
import { CardActionArea, IconButton, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";
import { cartContext } from "../../contexts/cartContext";

export default function MenCard({ item }) {
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  return (
    <div id="product" className="section-p">
      <div className="pro-container">
        <div className="pro">
          <CardActionArea style={{ borderRadius: "25px" }}>
            <CardMedia
              onClick={() => navigate(`/mens/${item.id}`)}
              component="img"
              src={item.image}
              alt=""
            />
          </CardActionArea>
          <div className="des">
            <span className="sp">{item.subtitle}</span>
            <h5 onClick={() => navigate(`/mens/${item.id}`)}>{item.title}</h5>
            <div>
              <Rating name="size-medium" defaultValue={1} />
            </div>
            <h4>{item.price}$</h4>
          </div>
          <IconButton className="cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              addProductToCart(item);
              setCheckProduct(checkProductInCart(item));
            }}
            className="cart"
            style={{ marginRight: "35px" }}
          >
            {checkProduct ? (
              <BookmarkRemoveSharpIcon />
            ) : (
              <BookmarkAddSharpIcon />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
