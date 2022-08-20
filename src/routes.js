import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import Courses from "./pages/courses";
import Regiseter from "./pages/register";
import Login from "./pages/login";

const RoutesMain = () => {
  return (
    <Routes>
      {/* pubplic routes */}
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        <Route path="register" element={<Regiseter />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;