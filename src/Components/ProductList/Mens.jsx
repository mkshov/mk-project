import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useEffect } from "react";
import { clothesContext } from "../../contexts/clothesContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion
          style={{
            width: "40%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <AccordionSummary
            style={{ display: "flex", justifyContent: "center" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <FilterAltIcon style={{ marginRight: "10px" }} /> Filters
            </Typography>
          </AccordionSummary>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#999999",
              }}
            ></div>
          </div>
          <AccordionDetails>
            <Button>Filters</Button>
          </AccordionDetails>
        </Accordion>
      </div>
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
