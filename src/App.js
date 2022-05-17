import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Courses from "./Components/Pages/Courses";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter basename="/cwh">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
