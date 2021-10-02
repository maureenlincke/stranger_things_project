import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

function login(username, password, setToken) {
    fetch(BASE_URL + 'users/login', {
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
    }).then((response) => response.json())
      .then(({ data }) => {
        const { token } = data.data;
        console.log(token);
    })
    .catch(console.error);
    //==> token
    //save it into the users browser
    //updateState token/setToken
}

function register(setToken, userName, passWord, confirmedPassword){

}

const Login = ({ setToken, match }) => {
    const [userName, setUserName] = useState("your username");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    return (
        <form
            onSubmit={(e) =>{
                e.preventDefault();
                if (match.url === "/register") console.log("=> register");
                if (match.url === "/login") console.log("=> login")
            }}
        >
            <div className="mb-3">
                <label className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    value={userName}
                    onChange={({target: {value}}) => setUserName(value)}
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
                <button type="submit" className="btn btn-primary mb-3">
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