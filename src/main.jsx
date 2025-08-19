import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSlider from "./components/HeroSlider";
import FlashSales from "./components/FlashSales";
import CategorySlider from "./components/CategorySlider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <div className="container flex">
      <Sidebar />
      <HeroSlider />
    </div>
    <FlashSales />
    <CategorySlider />
  </React.StrictMode>
);
