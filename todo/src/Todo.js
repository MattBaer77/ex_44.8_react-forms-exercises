import React from "react";

/*

Todo- this component should display a div with the task of the todo.
For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

*/

function Todo ({task, removeTodo}) {

    return (
        <div>
            {task}
            <button onClick={removeTodo}>
                X
            </button>
        </div>
    )

}

export default Todo;