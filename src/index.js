import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Login } from "./components";
import { Posts } from './components';

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log("Mounted")
    }, [])
    return (<BrowserRouter>
        <div className="app">
            <Route path="/posts">
                <Posts />
            </Route>
            <Route path="/login" />
        </div>
    </BrowserRouter>)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)