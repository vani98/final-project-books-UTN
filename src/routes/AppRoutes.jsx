import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Editorials from "../pages/Editorials";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Books from "../pages/Books";
import Cart from "../pages/Cart";
import BookPage from "../pages/Books/BookPage";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/editorials" element={<Editorials />} />
        <Route path="/books/:bookId" element={<BookPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
