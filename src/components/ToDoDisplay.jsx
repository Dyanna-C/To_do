import React, { useState } from 'react';
import ToDoCard from './ToDoCard';
import ToDoForm from './ToDoForm';

export default function ToDo(props) {
    const [tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask])
        event.target.task.value = '';
    }

    return (
        <>
            <h1 className="text-center">Dyanna's To-Do List Generator</h1>
            <ToDoForm handleFormSubmit={handleFormSubmit}/>
            <div className="row">
                {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
            </div>
        </>
    )
}