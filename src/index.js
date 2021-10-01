import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { Login } from "./components";
import { Posts } from './components';

const App = () => {
    const [token, setToken] = useState(null);
    return (
    <div className="app">
        <Posts />
        <Route path="/login" />
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)