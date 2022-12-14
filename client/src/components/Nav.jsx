//Base React libs
import React from "react";
import { Link } from "react-router-dom";

//Custom CSS stylesheet
import "../styles/main.css";

let Menu = () => {
  return (
    <div className="entire-nav">
      <ul>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/create">Create Recipe</Link>
        </li>
        <li>
          <Link to="/book">Recipe Book</Link>
        </li>
        <li>
          <Link to="/suggest">Suggest Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
