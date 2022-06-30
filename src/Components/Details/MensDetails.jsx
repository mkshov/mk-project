import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clothesContext } from "../../contexts/clothesContext";
import CircularProgress from "@mui/material/CircularProgress";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../HomePage/HomePage.css";

import { Box, Button, CardActionArea, IconButton, Rating } from "@mui/material";

const MensDetails = () => {
  const sImg = [
    {
      src: "https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2761b9e1/images/zoom/G8NC5ZG7C8A_N0000_2.jpg?sw=640&sh=816&sm=fit",
    },
    {
      src: "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwda954204/CH5163_WTW_24.jpg?imwidth=1920&impolicy=zoom",
    },
    {
      src: "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwa85f8bf1/CH2610_SBH_20.jpg?imwidth=375&impolicy=product",
    },
    {
      src: "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dwda954204/CH5163_WTW_24.jpg?imwidth=1920&impolicy=zoom",
    },
  ];
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneMen, oneMen, deleteMen } = useContext(clothesContext);
  const [smallImg, setSmallImg] = useState([]);
  const [mainImg, setMainImg] = useState("");
  useEffect(() => {
    getOneMen(id);
  }, []);
  console.log(oneMen);
  useEffect(() => {
    if (oneMen) {
      setMainImg(oneMen.image);
      setSmallImg([
        oneMen.image,
        oneMen.smallImg1,
        oneMen.smallImg2,
        oneMen.smallImg3,
      ]);
    }
  }, [oneMen]);
  console.log(oneMen);

  //   console.log(smallImg[1]);

  return (
    <div>
      {oneMen ? (
        <div>
          <div id="prodetails" className="section-p1">
            <div className="single-pro-image">
              <img src={mainImg} width="100%" alt="" id="MainImg" />
              <div className="small-image-group">
                {smallImg.map((item) => (
                  <div
                    key={item}
                    className="small-img-col"
                    onClick={() => setMainImg(item)}
                  >
                    <img src={item} width="100%" alt="" className="small-img" />
                  </div>
                ))}
                {/* ))} */}
              </div>
            </div>
            <div className="single-pro-details">
              <h4>{oneMen.title}</h4>
              <h2>${oneMen.price}</h2>
              <div className="box">
                <select>
                  <option>Select Size</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </div>
              <h4>Products Details</h4>
              <span>{oneMen.description}</span>
              <br />
              <div style={{ display: "grid", marginTop: "20px" }}>
                <Button
                  onClick={() => {
                    deleteMen(id);
                    navigate(`/mens`);
                  }}
                  style={{ marginBottom: "15px" }}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/edit-for-men/${id}`)}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
          <section id="product1" className="section-p1">
            <h2>Recommendet For You</h2>
            <p>Summer Collection New Morden Design</p>
            <div className="pro-container">
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img
                    src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2761b9e1/images/zoom/G8NC5ZG7C8A_N0000_2.jpg?sw=640&sh=816&sm=fit"
                    alt=""
                  />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img
                    src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2761b9e1/images/zoom/G8NC5ZG7C8A_N0000_2.jpg?sw=640&sh=816&sm=fit"
                    alt=""
                  />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img
                    src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2761b9e1/images/zoom/G8NC5ZG7C8A_N0000_2.jpg?sw=640&sh=816&sm=fit"
                    alt=""
                  />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
              <div className="pro">
                <CardActionArea style={{ borderRadius: "25px" }}>
                  <img
                    src="https://www.dolcegabbana.com/dw/image/v2/AAGA_PRD/on/demandware.static/-/Sites-15/default/dw2761b9e1/images/zoom/G8NC5ZG7C8A_N0000_2.jpg?sw=640&sh=816&sm=fit"
                    alt=""
                  />
                </CardActionArea>
                <div className="des">
                  <span className="sp">adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    <Rating name="size-medium" defaultValue={2} />
                  </div>
                  <h4>$78</h4>
                </div>
                <ShoppingCartIcon className="cart" />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default MensDetails;
