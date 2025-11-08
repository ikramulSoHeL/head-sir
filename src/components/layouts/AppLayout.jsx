import React from "react";
import "./_layouts.scss";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div className="app_layout">
      <Navbar />

      <main className="app_main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
