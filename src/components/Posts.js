import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const Posts = (props) => {
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
    const [name, setName] = useState("")

    return (<div>
        <h1> Create a new post </h1>
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                console.log(name);
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
                placeholder='Name'
                onChange={(event) => {

                }}
            >
            </input>
        </form>
    </div>
    )
}

export default Posts;