import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
    <div className="container flex">
      <Sidebar />
    </div>
  </React.StrictMode>
);
