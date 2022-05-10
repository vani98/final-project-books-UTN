import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Editorials from "../pages/Editorials";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Books from "../pages/Books";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/editorials" element={<Editorials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
