//Base React libs
import React from "react";
import { Link } from "react-router-dom";

//Custom CSS stylesheet
import "../styles/nav.css";

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
          <Link to="/search">Search Recipe</Link>
        </li>
        <li>
          <Link to="/suggest">Suggest Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
