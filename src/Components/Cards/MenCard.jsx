import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Cards.css";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  IconButton,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MenCard({ item }) {
  const navigate = useNavigate();
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
          <IconButton className="cart" style={{ marginRight: "35px" }}>
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton>
            <FavoriteIcon />
          </IconButton> */}
        </div>
      </div>
    </div>
    // <Card sx={{ width: 250, borderRadius: "20px" }}>
    //   <Box
    //     style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    //   >
    //     <CardActionArea
    //       style={{
    //         width: "220px",
    //         borderRadius: "20px",
    //       }}
    //     >
    //       <CardMedia
    //         style={{ borderRadius: "20px", width: "220px" }}
    //         component="img"
    //         height="220"
    //         image="https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1612465212/655517_JFB00_1000_001_100_0000_Light-Mens-slip-on-sandal.jpg"
    //         alt="green iguana"
    //       />
    //     </CardActionArea>
    //   </Box>
    //   <CardContent>
    //     <Typography style={{ color: "green" }} variant="h5" component="div">
    //       76$
    //     </Typography>
    //     <Typography variant="subtitle" style={{ color: "rgb(120, 120, 120)" }}>
    //       Гусси
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       Lizard
    //     </Typography>
    //     <Rating name="size-medium" defaultValue={1} />
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}
