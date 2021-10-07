import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const newPosts = ({isLoggedIn}) => {
    const postsUrl = BASE_URL + '/posts'
    const axios = require('axios').default;

    async function getPosts(){
        const posts = await axios.get(postsUrl);
        console.log(posts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    function makeHeaders(token) {
        //if token is not null
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        }
        //else
        return {
            'Content-Type': 'application/json'
        }
    }

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false)

    return (<div>
        <h1> Create a new post </h1>
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                try {
                    const response = await fetch(
                        postsUrl, 
                        {
                            method: 'POST',
                            header: makeHeaders(token),
                            body: JSON.stringify({
                                title,
                                description,
                                price,
                                location,
                                willDeliver,
                            }),
                        }
                    );
                    const result = await response.json();
                    setPosts([
                        ...posts,
                        result.data.name
                    ])
                } catch (err) {
                    console.error(err);
                }
            }}
            >
            
            <input
                type='text'
                placeholder='title'
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            >
            </input>
            <input
                type='text'
                placeholder='description'
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
            >
            </input>
            <input
                type='text'
                placeholder='price'
                onChange={(event) => {
                    setPrice(event.target.value)
                }}
            >
            </input>
            <input
                type='text'
                placeholder='location'
                onChange={(event) => {
                    setLocation(event.target.value)
                }}
            >
            </input>
            <input
                type='checkbox'
                onChange={(event) => {
                    setWillDeliver(event.target.value)
                }}
            >Will Deliver?
            </input>
        </form>
    </div>
    )
}

export default newPosts;