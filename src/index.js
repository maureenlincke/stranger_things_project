import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Login, Posts, Home, SinglePost, NewPosts } from "./components";
import { getPage } from "./apiHelpers";
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/register" class="nav-link">Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/home" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/posts" class="nav-link">Posts</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/profile" class="nav-link">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/newposts" class="nav-link">New Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
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