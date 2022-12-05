import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/HomePage";
import About from "./pages/AboutUsPage";
import Create from "./pages/CreatePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;


//remove comment 