import React from 'react';
import Navbar from './components/Navbar';
import ToDoDisplay from './components/ToDoDisplay';

export default function App(props) {
    return (
        <>
            <Navbar/>
            <div className="container">
                <ToDoDisplay />
            </div>
        </>
    )
}
