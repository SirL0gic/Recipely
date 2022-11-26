import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/HomePage";
import Lol from "./pages/TestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Lol />} />
      </Routes>
    </div>
  );
}

export default App;
