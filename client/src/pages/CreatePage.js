//Base React libs
import React from "react";

//Import Components
import RecipeForm from "../components/Form"

//Custom CSS stylesheet
import "../styles/create.css";

let Create = () => {
    return (
        <div className="form-box">
            <h1 className="main-heading"> &#128296; Create the Recipe &#128296;</h1>
            <RecipeForm />
        </div>
    )
}

export default Create;

