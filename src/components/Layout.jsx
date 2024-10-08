import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" bg-gray-scale-900 min-h-screen    ">
      <Navbar className="sticky top-0 z-10 " />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
