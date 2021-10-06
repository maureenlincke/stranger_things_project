import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Login, Posts, Home, newPosts } from "./components";

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("Mounted")
        //get the token from local storage and use it to log in
        const storedToken = localStorage.getItem('token');
        //check if storedToken is even there
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])

    return (<BrowserRouter>
        <Link to="/login">Login</Link>
        <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken}/>}/>

        <Link to="/register">Register</Link>
        <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken}/>}/>

        <Link to="/profile">Profile</Link>
        
        <Link to="/home">Home</Link>
        <Route path="/home" render={() => <Home isLoggedIn={!!token}/>}/>
        
        <Link to="/posts">Posts</Link>
        <Route path="/posts" render={() => <Posts isLoggedIn={!!token}/>}/>
                

    </BrowserRouter>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)