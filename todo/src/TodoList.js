import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm"

/*

TodoList - this component should render the NewTodoForm component
and should render the list of Todo components.

Place your state that contains all of the todos in this component.

*/

function TodoList() {

    const INITIAL_STATE = [

        { id: uuidv4(), task:"Sample First Task"},
        { id: uuidv4(), task:"Sample Second Task"}

    ]

    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (newTodo) => {

        setTodos(todos => [...todos, {...newTodo, id: uuidv4()}])

    }

    const removeTodo = (todo) => {
        setTodos(todos.filter(t => t !== todo))
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            {todos.map(t => <Todo key={t.id} task={t.task} removeTodo={() => removeTodo(t)}/>)}
        </>
    )

}

export default TodoList;