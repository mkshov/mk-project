import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens" element={<h1>mens</h1>} />
      <Route path="/womens" element={<h1>women's</h1>} />
      <Route path="/cart" element={<h1>privet</h1>} />
      <Route path="/favorite" element={<h1>privet</h1>} />
      <Route path="/login" element={<h1>privet</h1>} />
      <Route path="/register" element={<h1>privet</h1>} />
    </Routes>
  );
};

export default Routing;
