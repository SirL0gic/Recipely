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

let RecipeForm = () => {
  // e is the event object

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [picture, setPic] = useState("");

  let handleSubmit = (eventobject) => {
    eventobject.preventDefault();
    console.log("Data submitted");
    

    const recipeData = { 
    recipe_name: title,
    recipe_author: author,
    recipe_ingredients: ingredients,
    recipe_directions: steps,
    recipe_image: picture,

    };

    console.log("Server Log: " + JSON.stringify(recipeData));

    // fetch('http://localhost:3000/db.json')
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    // window.location.replace("http://www.w3schools.com");


  };

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="form-labels">Recipe</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <Form.Label className="form-labels">Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Form.Label></Form.Label>
        <InputGroup>
          <InputGroup.Text>Ingredients</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </InputGroup>
        <br></br>
        <InputGroup>
          <InputGroup.Text>Steps</InputGroup.Text>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </InputGroup>
        <br></br>
        <Form.Label className="form-labels">Upload a picture</Form.Label>
        <Form.Control
          type="file"
          size="sm"
          value={picture}
          onChange={(e) => setPic(e.target.value)}
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
      <p>{title}</p>
    </Form>
  );
};

export default RecipeForm;
