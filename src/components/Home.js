import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants'

// async function userData({setUsername}){
//     const token = localStorage.getItem('token')
//     const response = await fetch(BASE_URL + 'users/me', {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': "BEARER " + token,
//         },
//         })
//         const result = await response.json();
//         const userName = result.data.username
//         console.log(userName)
//         return setUsername(userName)
//     }
//     userData()


const Home = () => {
    const token = localStorage.getItem("token")

    return (
        <div>
            <h2>Welcome to Stranger's Things!</h2>
            <h3>Logged in as {}</h3>
        </div>
    )
}

export default Home;