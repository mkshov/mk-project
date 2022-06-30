import React from "react";
import { Routes, Route } from "react-router-dom";
import AddForMens from "./Components/AddForMens/AddForMens";
import Footer from "./Components/Footer/Footer";
import Mens from "./Components/ProductList/Mens";
import HomePage from "./Components/HomePage/HomePage";
import MensDetails from "./Components/Details/MensDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<MensDetails />} />
      <Route path="/womens" element={<h1>women's</h1>} />
      <Route path="/add-for-mens" element={<AddForMens />} />
      <Route path="/add=for-womens" element={<h1>mens</h1>} />
      <Route path="/cart" element={<h1>privet</h1>} />
      <Route path="/favorite" element={<h1>privet</h1>} />
      <Route path="/login" element={<h1>privet</h1>} />
      <Route path="/register" element={<h1>privet</h1>} />
    </Routes>
  );
};

export default Routing;
