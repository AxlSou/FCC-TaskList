import React, { useState } from "react";
import TaskForm from "./form";
import '../stylesheets/TaskList.css'  
import Task from "./task";

function TaskList() {

    const [tasks, setTask] = useState([])

    const addTask = task => {
        console.log(task)
        if (task.text.trim()) {
            task.text = task.text.trim()
            const tasksUpdated = [task, ...tasks];
            setTask(tasksUpdated)
        }
    }

    const deleteTask = id => {
        const tasksUpdated = tasks.filter(task => task.id !== id);
        setTask(tasksUpdated)
    }

    const completeTask = id => {
        const tasksUpdated = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed
            }
            return task
        });
        setTask(tasksUpdated);
    }

    return (
        <>
            <TaskForm onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    );
}

export default TaskList