//to do 
//create component called posts
//update piece of state

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Posts } from './components';

const App = () => {
    const [posts, setPosts] = useState('')
    return <div className="app">
        <Title />
        <Posts />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementsByClassName('app')
)