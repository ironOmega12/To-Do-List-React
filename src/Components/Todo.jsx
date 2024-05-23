import React from "react";
import {useState} from 'react'
import './Todo.css'

function Todo(){

    const [tasks, setTasks] = useState(["Walk the dog", "Wash the carpets", "Learn to code"]);
    const [newTask, setNewTask] = useState("");

    function onChangeHandle(event){
        setNewTask(event.target.value);
    }

    function addNewTask(){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="container">
            <div className="title-content">
                <h1>To Do</h1>
            </div>
            <div className="list-container">
                <input type="text" id="add-item" placeholder="Enter a task..." value={newTask} onChange={onChangeHandle}/>
                <button onClick={addNewTask}>Add</button>
            </div>

            <div className="list-items">
                <ul>
                    {tasks.map((task, index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                    Delete
                            </button>
                            <button
                                className="up-button"
                                onClick={() => moveUp(index)}>
                                    👆
                            </button>
                            <button
                                className="down-button"
                                onClick={() => moveDown(index)}>
                                    👇
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Todo