import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

const Home = () => {
    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Logged in as {}</h3>
        </div>
    )
}

export default Home;