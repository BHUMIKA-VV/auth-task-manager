import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Auth.css';

function Login({ onLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData);
            const { user, token } = response.data;
            onLogin(user, token);
            setMessage('Login successful!');
            setIsSuccess(true);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
            setIsSuccess(false);
        }
    };

    return ( <
        div className = "auth-container" >
        <
        div className = "auth-form" >
        <
        h2 > Login < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Email: < /label> <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label > Password: < /label> <
        input type = "password"
        name = "password"
        value = { formData.password }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
        button type = "submit"
        className = "auth-btn" > Login < /button> <
        /form> {
            message && ( <
                div className = { `message ${isSuccess ? 'success' : 'error'}` } > { message } <
                /div>
            )
        } <
        p > Don 't have an account? <Link to="/register">Register here</Link></p> <
        /div> <
        /div>
    );
}

export default Login;