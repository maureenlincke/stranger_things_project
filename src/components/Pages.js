import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const Pages = () => {
    const postsUrl = BASE_URL + '/posts'

    const [page, setPage] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            const response = await fetch(postsUrl);
            const data = await response.json();
            console.log(data);
            console.log(data.data.posts);
            console.log(data.data.posts.author)
            return setPage((data.data.posts))
        }
        fetchPage();
        console.log(page)
    }, []);
    
    
    return (<div> 
            <h1>     
                {
                page.map((post) => {<div key={post._id}>
                    <h3>{post.title}</h3>

                </div>
                })
            } 
            </h1>
            </div>)
    
}

export default Pages;