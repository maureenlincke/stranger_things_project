import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Login, Posts, Home, SinglePost, NewPosts } from "./components";

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
        <Link to="/home">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/register">Register</Link>
        <Link to="/newposts">New Post</Link>
        
        <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} isLoggedIn={!!token}/>}/>
        <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} isLoggedIn={!!token}/>}/>
        <Route path="/home" render={(routeProps) => <Home {...routeProps} isLoggedIn={!!token} token={token} username={username} setUsername={setUsername} />}/>
        <Route path="/posts" render={(routeProps) => <Posts {...routeProps} isLoggedIn={!!token}/>}/>
        <Route path="/posts/:postId" render={(routeProps) => <SinglePost {...routeProps} />}/> 
        <Route path="newposts" render={(routeProps) => <NewPosts {...routeProps}/>}/>      
        
    </BrowserRouter>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)