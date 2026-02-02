import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import api from '../services/api';

function Dashboard({ user }) {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async() => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = () => {
        setEditingTask(null);
        setShowForm(true);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingTask(null);
        fetchTasks();
    };

    return ( <
        div className = "dashboard" >
        <
        h1 > Welcome, { user.username }! < /h1> <
        div className = "dashboard-header" >
        <
        button onClick = { handleAddTask }
        className = "add-task-btn" >
        Add New Task <
        /button> <
        /div> {
            showForm && ( <
                TaskForm task = { editingTask }
                onClose = { handleFormClose }
                />
            )
        } <
        TaskList tasks = { tasks }
        onEdit = { handleEditTask }
        onRefresh = { fetchTasks }
        /> <
        /div>
    );
}

export default Dashboard;