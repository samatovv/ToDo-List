import React, { useState } from "react"

export const HomePage = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task])
            setTask("")
        }
    }
    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    return (
        <div className="container mx-auto">
            <div className="row">
                <h1 className="text-4xl font-bold text-blue-500 text-center my-5">ToDo-list</h1>
                <div className="col-4 m-auto p-3 my-5 bg-white shadow-lg rounded-lg">
                    <div className="d-flex mb-3">
                        <div className="flex items-center space-x-2">
                            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" className="text-input input form-control px-3 py-2 border rounded w-full"/>
                            <button onClick={addTask} className="add-btn btn btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
                        </div>
                    </div>
                    <div className="p-2 my-3">
                        <ul className="list list-group">
                            {tasks.length > 0 ? (
                                tasks.map((task, index) => (
                                    <li key={index} className="list-group-item flex justify-between items-center p-2 mb-2 border rounded bg-gray-100">
                                        <span>{task}</span>
                                        <button onClick={() => removeTask(index)} className="text-red-500 hover:text-red-700">✕</button>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center">No tasks yet!</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
