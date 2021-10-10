import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

//TO DO
// - When the user is logged in, let them see their own posts (after fixing NewPosts)
async function userData(){
    const token = localStorage.getItem('token')
    const response = await fetch(BASE_URL + 'users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "BEARER " + token,
        },
        })
    const result = await response.json();
    const userName = result.data.username
    localStorage.setItem("username", userName)
}

function logout(){
    fetch(BASE_URL +'/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
            username: '',
            password: ''
            }
        })
    })
    localStorage.removeItem("token")
    localStorage.removeItem("username")
}

const Home = ({isLoggedIn, history}) => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")

    useEffect(() => {
        userData()
    }, []);

    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Logged in as {username}</h3>
            <button onClick={() => {logout()}}>Logout</button>
        </div>
    )
}

export default Home;