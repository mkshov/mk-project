import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { clothesContext } from "../../contexts/clothesContext";
import MenCard from "../Cards/MenCard";

const Mens = () => {
  const { getMens, mens } = useContext(clothesContext);
  console.log(mens);
  useEffect(() => {
    getMens();
  }, []);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // marginTop: "150px",
      }}
    >
      <section id="page-header">
        <h2>#formakers</h2>
        <p>Save more with coupons $ up to 70% off!</p>
      </section>
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {mens.map((item) => (
          <MenCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Mens;
