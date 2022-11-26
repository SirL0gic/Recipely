import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/HomePage";
import About from "./pages/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
