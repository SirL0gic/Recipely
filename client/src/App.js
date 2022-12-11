import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/HomePage";
import About from "./pages/AboutUsPage";
import Create from "./pages/CreatePage";
import Book from "./pages/RecipeBookPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="create" element={<Create />} />
        <Route path="book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
