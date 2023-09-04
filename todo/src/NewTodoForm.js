import React, { useState } from "react";


/*

NewTodoForm - this component should render a form with
one text input for the task to be created.
When this form is submitted, a new Todo component should be created.

*/

function NewTodoForm ( {addTodo}) {

    const INITIAL_STATE = {
        task:""
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
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }


    return (

        <form onSubmit={handleSubmit}>

            <h3>Add "TO DO"</h3>

            <label htmlFor="task">Width: </label>
            <input
                type="text"
                placeholder="task"
                name="task"
                id="task"
                value={formData.task}
                onChange={handleChange}
            />

            <button> Add Task! </button>

        </form>
    )
}

export default NewTodoForm;