import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./Components/headerMk/Header";
import BackDrop from "./Components/headerMk/BackDrop";
import Sidebar from "./Components/headerMk/Sidebar";
import { Container } from "@mui/material";
import "./App.css";
import HeaderContextProvider from "./contexts/headerContext";
import ClothesContextProvider from "./contexts/clothesContext";

function App() {
  return (
    <ClothesContextProvider>
      <HeaderContextProvider>
        <BrowserRouter>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              flexFlow: "wrap",
            }}
          >
            <Header />
          </Container>
          <Sidebar />
          <BackDrop />
          <Routing />
        </BrowserRouter>
      </HeaderContextProvider>
    </ClothesContextProvider>
  );
}

export default App;
