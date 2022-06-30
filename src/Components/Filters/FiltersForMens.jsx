import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
function valuetext(value) {
  return `${value}°C`;
}

export default function FiltersForMens() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ height: "17vh" }}>
      <Box>
        <Typography>For Price</Typography>
        <Slider
          className="large-slider"
          style={{ color: "#767e85" }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Slider
          className="small-slider"
          size="small"
          style={{ color: "#767e85" }}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <Box
        style={{
          width: " 100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            name=""
            placeholder="Pesquise"
          />
          <div className="search-btn">
            <SearchIcon />
          </div>
        </div>
      </Box>
    </div>
  );
}
