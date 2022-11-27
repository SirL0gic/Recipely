//Base React libs
import React, { useState } from "react";

//Bootstrap-npm-lib
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";


function RecipeForm() {
    const [email,setEmail] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recipe</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>{email}</p>
    </Form>
   
  );
}

export default RecipeForm;