import React, { useState } from "react";
import '../stylesheets/Form.css'
import { v4 as uuid4v } from 'uuid'

function TaskForm(props) {

    const [input, setInput] = useState('');

    const inputHandler = e => {
        setInput(e.target.value);
    };

    const sendHandler = e => {
        e.preventDefault();
        const newTask = {
            id: uuid4v(),
            text: input,
            completed: false
        };

        props.onSubmit(newTask);
        e.target.reset()
    };

    return (
        <form 
            className="task-form"
            onSubmit={sendHandler}>
            <input 
                className="task-input"
                type='text'
                placeholder='Enter your task'
                name='text'
                onChange={inputHandler}/>
            <button className='task-btn'>
                Add Task
            </button>
        </form>
    )
}

export default TaskForm