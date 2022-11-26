//Base React libs
import React from "react";

//Importin components
import Menu from "../components/Nav";

//Custom CSS stylesheet
import "../styles/home.css";

let Home = () => {
  document.body.style.background = "#28C76F";
  return (
    <div className="menu-box">
      <h1 className="main-heading"> &#127836; Recipely  &#127836;</h1>
      <Menu />
    </div>
  );
};

export default Home;
