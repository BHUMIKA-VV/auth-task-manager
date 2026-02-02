import React, { useState } from 'react';
import api from '../services/api';
import './TaskList.css';

function TaskList({ tasks, user, onTaskUpdated, onTaskDeleted }) {
    const [editingTask, setEditingTask] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', description: '' });

    const handleEdit = (task) => {
        setEditingTask(task._id);
        setEditForm({ title: task.title, description: task.description });
    };

    const handleEditChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    };

    const handleEditSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.put(`/tasks/${editingTask}`, editForm);
            onTaskUpdated(response.data);
            setEditingTask(null);
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleDelete = async(taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await api.delete(`/tasks/${taskId}`);
                onTaskDeleted(taskId);
            } catch (error) {
                console.error('Failed to delete task:', error);
            }
        }
    };

    const canEdit = (task) => {
        return user.role === 'admin' || task.user === user._id;
    };

    return ( <
        div className = "task-list" >
        <
        h3 > Your Tasks < /h3> {
            tasks.length === 0 ? ( <
                p > No tasks found. < /p>
            ) : ( <
                ul > {
                    tasks.map(task => ( <
                        li key = { task._id }
                        className = "task-item" > {
                            editingTask === task._id ? ( <
                                form onSubmit = { handleEditSubmit }
                                className = "edit-form" >
                                <
                                input type = "text"
                                name = "title"
                                value = { editForm.title }
                                onChange = { handleEditChange }
                                required /
                                >
                                <
                                textarea name = "description"
                                value = { editForm.description }
                                onChange = { handleEditChange }
                                required /
                                >
                                <
                                button type = "submit" > Save < /button> <
                                button type = "button"
                                onClick = {
                                    () => setEditingTask(null) } > Cancel < /button> <
                                /form>
                            ) : ( <
                                div className = "task-content" >
                                <
                                h4 > { task.title } < /h4> <
                                p > { task.description } < /p> <
                                small > Created by: { task.userName || 'Unknown' } < /small> {
                                    canEdit(task) && ( <
                                        div className = "task-actions" >
                                        <
                                        button onClick = {
                                            () => handleEdit(task) } > Edit < /button> <
                                        button onClick = {
                                            () => handleDelete(task._id) } > Delete < /button> <
                                        /div>
                                    )
                                } <
                                /div>
                            )
                        } <
                        /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>
    );
}

export default TaskList;