import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Login, Posts, Home, SinglePost, NewPosts } from "./components";
import { getPage } from "./apiHelpers";
import bootstrap from "bootstrap";

const App = () => {
    const [token, setToken] = useState(null);
    const [page, setPage] = useState([])

    useEffect(() => {
        getPage().then(page => setPage(page))
    }, [])

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
        <Route path="/home" render={(routeProps) => <Home {...routeProps} isLoggedIn={!!token} token={token}/>}/>
        <Route path="/posts" render={(routeProps) => <Posts {...routeProps} page={page} isLoggedIn={!!token}/>}/>
        <Route path="/posts/:postId" render={(routeProps) => <SinglePost {...routeProps} />}/> 
        <Route path="newposts" render={(routeProps) => <NewPosts {...routeProps} isLoggedIn={!!token}/>}/>      
        
    </BrowserRouter>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)