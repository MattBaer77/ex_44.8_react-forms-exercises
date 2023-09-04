import React, { useState } from "react";

/* 

NewBoxForm - this component should render a form that when submitted, 
creates a new Box.

You should be able to specify the Box’s
width,
height,
and background color.

When the form is submitted, clear the input values.
*/

function NewBoxForm({addBox}) {

    const INITIAL_STATE = {
        width: "",
        height: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {

        const {name, value} = e.target;

        setFormData((data) => {
            return {
                ...data,
                [name]:value
            }
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        
        addBox({...formData});
        setFormData(INITIAL_STATE);

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Box Form</h3>

            <label htmlFor="width">Width: </label>
            <input
                type="text"
                placeholder="width"
                name="width"
                id="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Width: </label>
            <input
                type="text"
                placeholder="height"
                name="height"
                id="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="background color">Width: </label>
            <input
                type="text"
                placeholder="background color"
                name="backgroundColor"
                id="background-color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button> Add Box! </button>

        </form>
    )

}


export default NewBoxForm;