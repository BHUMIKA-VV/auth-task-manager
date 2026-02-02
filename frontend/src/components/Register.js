import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './Auth.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          await api.post('/auth/register', formData);
      
          setMessage('Registration successful! Please login.');
          setIsSuccess(true);
        } catch (error) {
          setMessage(error.response?.data?.message || 'Registration failed');
          setIsSuccess(false);
        }
      };
      

    return ( <
        div className = "auth-container" >
        <
        div className = "auth-form" >
        <
        h2 > Register < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div className = "form-group" >
        <
        label > Username: < /label> <
        input type = "text"
        name = "username"
        value = { formData.username }
        onChange = { handleChange }
        required /
        >
        <
        /div> <
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
        className = "auth-btn" > Register < /button> <
        /form> {
            message && ( <
                div className = { `message ${isSuccess ? 'success' : 'error'}` } > { message } <
                /div>
            )
        } <
        p > Already have an account ? < Link to = "/login" > Login here < /Link></p >
        <
        /div> <
        /div>
    );
}

export default Register;