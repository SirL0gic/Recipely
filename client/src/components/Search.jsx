


import ReactDOM from 'react-dom';
//Base React libs
import React, { useState } from "react";

//Bootstrap-npm-lib
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import RecipeReviewCard from "../components/Card";

//Custom CSS stylesheet
import "../styles/create.css";

let SearchBar = () => {
  // e is the event object

  const [title, setTitle] = useState("");
 
  let handleSubmit = (eventobject) => {
    eventobject.preventDefault();
    console.log("Data submitted");
    
    // const recipeData = { 
    // recipe_name: title,
    // };

    //function to remove current items from the page
    function removeElementsByClass(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    };

    removeElementsByClass("cols");


    //The component that matches the search query is rendered.
    ReactDOM.render(<RecipeReviewCard />, document.getElementById('recipe-cardslist'));
   
    // window.location.replace("http://www.w3schools.com");


  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search for Food"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <div className="text-center">
        <Button className="submit-button" variant="dark" type="submit">
          Submit
        </Button>
        <Button className="back-button" variant="dark" href="/">
          Go Back
        </Button>
      </div>
    </Form>
  );
};

export default SearchBar;
