import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './TaskForm.css';

function TaskForm({ task, onClose }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        completed: false
    });

    useEffect(() => {
        if (task) {
            setFormData({
                title: task.title,
                description: task.description,
                completed: task.completed
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if (task) {
                await api.put(`/tasks/${task._id}`, formData);
            } else {
                await api.post('/tasks', formData);
            }
            onClose();
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    return ( <
        div className = "task-form-overlay" >
        <
        div className = "task-form" >
        <
        h2 > { task ? 'Edit Task' : 'Add New Task' } < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Title: < /label> <
        input type = "text"
        name = "title"
        value = { formData.title }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label > Description: < /label> <
        textarea name = "description"
        value = { formData.description }
        onChange = { handleChange }
        rows = "4" /
        >
        <
        /div> <
        div className = "form-group checkbox-group" >
        <
        label >
        <
        input type = "checkbox"
        name = "completed"
        checked = { formData.completed }
        onChange = { handleChange }
        />
        Completed <
        /label> <
        /div> <
        div className = "form-actions" >
        <
        button type = "submit"
        className = "save-btn" > { task ? 'Update' : 'Create' }
        Task <
        /button> <
        button type = "button"
        onClick = { onClose }
        className = "cancel-btn" >
        Cancel <
        /button> <
        /div> <
        /form> <
        /div> <
        /div>
    );
}

export default TaskForm;