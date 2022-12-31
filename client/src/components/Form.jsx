// //Base React libs
// import React, { useState } from "react";

// //Bootstrap-npm-lib
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

// //Bootstrap-Bundle-JS-CSS
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap/dist/css/bootstrap.min.css";

// import axios from "axios";

// //Custom CSS stylesheet
// import "../styles/create.css";

// let RecipeForm = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [file, setFile] = useState(null);

//   const handleChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   let handleSubmit = (eventobject) => {
//     eventobject.preventDefault(); //to prevent refresh

//     const formData = new FormData();
//     formData.append("image", file);

//     const recipeData = {
//       recipe_name: title,
//       recipe_author: author,
//       recipe_ingredients: ingredients,
//       recipe_directions: steps,
//       recipe_image: file.name,
//     };

//     console.log("Data submitted");

//     axios.defaults.baseURL = "http://localhost:8000";
//     axios
//       .post("/send-recipe-data", recipeData) //the endpoint to send the post request + the data to send
//       .then((res) => {
//         console.log(res.data); // Log the response data to the console
//       })
//       .catch((err) => {
//         console.error(err); // Log any errors
//       });

//     // window.location.replace("http://www.w3schools.com");
//   };

//   return (
//     <Form className="form-container" onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label className="form-labels">Recipe</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br></br>
//         <Form.Label className="form-labels">Author</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter author name"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />

//         <Form.Label></Form.Label>
//         <InputGroup>
//           <InputGroup.Text>Ingredients</InputGroup.Text>
//           <Form.Control
//             as="textarea"
//             aria-label="With textarea"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//           />
//         </InputGroup>
//         <br></br>
//         <InputGroup>
//           <InputGroup.Text>Steps</InputGroup.Text>
//           <Form.Control
//             as="textarea"
//             aria-label="With textarea"
//             value={steps}
//             onChange={(e) => setSteps(e.target.value)}
//           />
//         </InputGroup>
//         <br></br>
//         <Form.Label className="form-labels">Upload a picture</Form.Label>
//         <Form.Control
//           type="file"
//           name="file"
//           size="sm"
//           // value={picture}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <div className="text-center">
//         <Button className="submit-button" variant="dark" type="submit">
//           Submit
//         </Button>
//         <Button className="back-button" variant="dark" href="/">
//           Go Back
//         </Button>
//       </div>
//       <p>{title}</p>
//     </Form>
//   );
// };

// export default RecipeForm;


import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    author: '',
    name: '',
    ingredients: '',
    directions: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result
      }));
    }

    reader.readAsArrayBuffer(file);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios.defaults.baseURL = "http://localhost:8000";
    axios.post('/send-recipe-data', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <br />
      <label>
        Recipe name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ingredients:
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
      </label>
      <br />
      <label>
        Directions:
        <textarea name="directions" value={formData.directions} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" onChange={handleFileChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RecipeForm;
