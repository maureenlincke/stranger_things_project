import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const Posts = ({isLoggedIn}) => {
    const postsUrl = BASE_URL + '/posts'

    const [page, setPage] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            const response = await fetch(postsUrl);
            const data = await response.json();``
            return setPage((data.data.posts))
        }
        fetchPage();
    }, []);
    
    
    return (<div> 
        {isLoggedIn && <div>
            Welcome!
            </div>}
            <h1>     
                {
                page.map((post) => {
                return (<div key={post.author}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    {isLoggedIn && <div>
                        <button>Send Message</button>
                        </div>}
                </div>)
                })
            } 
            </h1>
            </div>)
    
}

export default Posts;