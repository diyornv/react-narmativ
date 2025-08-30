import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSlider from "./components/HeroSlider";
import FlashSales from "./components/FlashSales";
import CategorySlider from "./components/CategorySlider";
import BestSelling from "./components/BestSelling";
import JblBanner from "./components/JblBanner";
import ExploreProducts from "./components/ExploreProducts";
import Arrival from "./components/Arrival";
import Services from "./components/Services";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const HomePage = () => (
  <>
    <div className="container flex">
      <Sidebar />
      <HeroSlider />
    </div>
    <FlashSales />
    <CategorySlider />
    <BestSelling />
    <JblBanner />
    <ExploreProducts />
    <Arrival />
    <Services />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
