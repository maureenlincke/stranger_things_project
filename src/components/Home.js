import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

async function userData(){
    const token = localStorage.getItem('token')
    console.log(token)
    const response = await fetch(BASE_URL + 'users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "BEARER " + token,
        },
        })
    const result = await response.json();
    const userName = result.data.username
    const messages = result.data.messages

    localStorage.setItem("username", userName)
    localStorage.setItem("messages", messages)
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
    localStorage.removeItem("messages")
}

const Home = () => {
    const messages = localStorage.getItem("messages")
    const username = localStorage.getItem("username")

    useEffect(() => {
        userData();
    }, []);

    //figure out how to add messages to this const so they can be accessed as an array (currently a string in local storage)
    return (
        <div>
            <h1>Welcome to Stranger's Things!</h1>
            <h2>Logged in as {username}</h2>
            <button onClick={() => {logout()}}>Logout</button>
            <div>
                <h2>Messages</h2>
            </div>
        </div>
    )
}

export default Home;