import React from "react";
import HeaderContextProvider from "./Components/contexts/headerContext";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./Components/headerMk/Header";
import BackDrop from "./Components/headerMk/BackDrop";
import Sidebar from "./Components/headerMk/Sidebar";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <HeaderContextProvider>
      <BrowserRouter>
        <Header />
        {/* <Container
          maxWidth="lg"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexFlow: "wrap",
            backgroundColor: "white",
          }}
        > */}
        <Sidebar />
        <BackDrop />
        <Routing />
        {/* </Container> */}
      </BrowserRouter>
    </HeaderContextProvider>
  );
}

export default App;
