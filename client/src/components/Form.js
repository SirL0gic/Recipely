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

  const [title, setTitle] = useState("");

  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recipe</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author name" />
        
        <Form.Label></Form.Label>
        <InputGroup>
          <InputGroup.Text>Ingredients</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br></br>
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>{title}</p>
    </Form>
  );
}

export default RecipeForm;
