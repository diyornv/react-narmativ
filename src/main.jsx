import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSlider from "./components/HeroSlider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <div className="container flex">
      <Sidebar />
      <HeroSlider />
    </div>
  </React.StrictMode>
);
