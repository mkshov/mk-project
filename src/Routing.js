import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import MensDetails from "./Components/Details/MensDetails";
import EditForMen from "./Components/Edit Form/EditForMen";
import LogIn from "./Components/Auth Froms/LogIn";
import SignUp from "./Components/Auth Froms/SignUp";
import AddForWomens from "./Components/Add Form/AddForWomens";
import EditForWomen from "./Components/Edit Form/EditForWomen";
import WomensDetails from "./Components/Details/WomensDetails";
import AddForMens from "./Components/Add Form/AddForMens";
import Mens from "./Components/ProductLists/Mens";
import Womens from "./Components/ProductLists/Womens";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<MensDetails />} />
      <Route path="/womens/:id" element={<WomensDetails />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/add-for-mens" element={<AddForMens />} />
      <Route path="/add-for-womens" element={<AddForWomens />} />
      <Route path="/edit-for-men/:id" element={<EditForMen />} />
      <Route path="/edit-for-womens/:id" element={<EditForWomen />} />
      <Route path="/cart" element={<h1>privet</h1>} />
      <Route path="/favorite" element={<h1>privet</h1>} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

export default Routing;
