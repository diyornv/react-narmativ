import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <Navbar />
  </React.StrictMode>
);
