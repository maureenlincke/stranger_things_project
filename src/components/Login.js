import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

async function login(username, password, setToken) {
    const response = await fetch(BASE_URL + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            },
        }),
    })

    const result = await response.json();
    const token = result.data.token;
    setToken(token);
    localStorage.setItem("token", token);
}

async function register(setToken, username, password, confirmedPassword){
    if (password !== confirmedPassword){
        alert("Passwords don't match");
        return;
    }
    const response = await fetch(BASE_URL + 'users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            },
        }),
    })
    const result = await response.json();
    const token = result.data.token;
    setToken(token);
    localStorage.setItem("token", token);
}

const Login = ({ setToken, match, isLoggedIn, history }) => {
    const [username, setUsername] = useState("your username");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    return (
        <form
            onSubmit={(e) =>{
                e.preventDefault();
                if (match.url === "/register") register(setToken, username, password, confirmedPassword)
                if (match.url === "/login") login(username, password, setToken)
            }}
        >
            <div className="mb-3">
                <label className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={({target: {value}}) => setUsername(value)}
                    className="form-control"
                    id="exampleFormControlInput"
                    placeholder="your username"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                    className="form-control"
                    id="examleFormControlInput"
                    placeholder=""
                />
            </div>
            {
            match.url === "/register" ? (
            <div className="mb-3">
                <label className="form-label">
                    Confirm Password
                </label>
                <input 
                    type="password"
                    onChange={({target: {value}}) => setConfirmedPassword(value)}
                    value={confirmedPassword}
                    className="form-control"
                    id="exampleFormControlInput"
                    placeholder=""
                />
            </div>
            ) : null}
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3"
                    onClick={() => {isLoggedIn && history.push("/home")}}
                >
                    Submit
                </button>
                {
                    match.url === "/register" ?
                    <Link to="/login"> Already have an account?</Link>
                    : <Link to="/register"> Don't have an account?</Link>
                }
            </div>
        </form>
    )
}

export default Login;