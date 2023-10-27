import React from "react";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/pricing/Pricing";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";


import "./App.css";

function App() {
  return (
    <div className="all-content">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
