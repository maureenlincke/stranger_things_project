import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

//TO DO
// - When the user is logged in, let them see their own posts (after fixing NewPosts)

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

    //isLoggedIn ? userData() : null;

    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Logged in as {username}</h3>
            <button onClick={() => {
                logout()
                return (history.push(() => "/login"))}}>Logout</button>
        </div>
    )
}

export default Home;