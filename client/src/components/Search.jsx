

//Base React libs
import React, { useState } from "react";

//Bootstrap-npm-lib
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS stylesheet
import "../styles/create.css";

let SearchBar = () => {
  // e is the event object

  const [title, setTitle] = useState("");
 
  let handleSubmit = (eventobject) => {
    eventobject.preventDefault();
    console.log("Data submitted");
    const recipeData = { 
    recipe_name: title,
    };

    console.log("Server Log: " + JSON.stringify(recipeData));

    var b = g

    var a = document.getElementById("recipe-cardslist");
    console.log("we got it",a)
    // fetch('http://localhost:3000/db.json')
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    // window.location.replace("http://www.w3schools.com");


  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
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
