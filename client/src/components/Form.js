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

    function handleSubmit(x) {
        x.preventDefault();
        console.log('You clicked submit.');
        window.location.replace("http://www.w3schools.com");
      }

  const [title, setTitle] = useState("");


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
        <Form.Control type="text" placeholder="Enter author name" />
        
        <Form.Label></Form.Label>
        <InputGroup>
          <InputGroup.Text>Ingredients</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br></br>
        <InputGroup>
          <InputGroup.Text>Steps</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br></br>
        <Form.Label className="form-labels">Upload a picture</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <div className="text-center">
      <Button className="submit-button" variant="dark" type="submit" onChange={(e) => setTitle(e.target.value)}>
        Submit
      </Button>
      <Button className="back-button" variant="dark" href="/">Go Back</Button>
      </div>
      <p>{title}</p>
    </Form>
  );
}

export default RecipeForm;
