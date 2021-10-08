import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Login, Posts, Home } from "./components";

const App = () => {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState("")

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])

    return (<BrowserRouter>
        <Link to="/login">Login</Link>
        <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} isLoggedIn={!!token}/>}/>

        <Link to="/register">Register</Link>
        <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} isLoggedIn={!!token}/>}/>

        <Link to="/profile">Profile</Link>
        
        <Link to="/home">Home</Link>
        <Route path="/home" render={() => <Home isLoggedIn={!!token} token={token} username={username} setUsername={setUsername} />}/>
        
        <Link to="/posts">Posts</Link>
        <Route path="/posts" render={() => <Posts isLoggedIn={!!token}/>}/>
                

    </BrowserRouter>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)