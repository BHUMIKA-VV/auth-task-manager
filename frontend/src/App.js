import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        if (token && userData) {
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogin = (userData, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return ( <
            Router >
            <
            div className = "App" >
            <
            header className = "App-header" >
            <
            h1 > Task Management App < /h1> {
                isAuthenticated && ( <
                    button onClick = { handleLogout }
                    className = "logout-btn" > Logout < /button>
                )
            } <
            /header> <
            main >
            <
            Routes >
            <
            Route path = "/register"
            element = { < Register / > }
            /> <
            Route path = "/login"
            element = { < Login onLogin = { handleLogin }
                />} / >
                <
                Route
                path = "/dashboard"
                element = {
                    isAuthenticated ? < Dashboard user = { user }
                    /> : <Navigate to="/login
                    " />} /
                    >
                    <
                    Route path = "/"
                    element = { < Navigate to = { isAuthenticated ? "/dashboard" : "/login" }
                        />} / >
                        <
                        /Routes> <
                        /main> <
                        /div> <
                        /Router>
                    );
                }

                export default App;