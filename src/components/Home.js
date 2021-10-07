import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

async function userData(){
    const token = localStorage.getItem("token")
    console.log(token)

    const response = await fetch(BASE_URL + 'users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}
userData()

const Home = () => {
    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Logged in as {}</h3>
        </div>
    )
}

export default Home;