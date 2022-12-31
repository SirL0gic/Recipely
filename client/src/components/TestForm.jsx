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

    axios.post('/api/recipes', formData)
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
