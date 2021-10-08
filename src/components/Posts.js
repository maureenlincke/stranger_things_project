import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const Posts = ({isLoggedIn, history}) => {
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
            <h1>Welcome!</h1>
            <button onClick={history.push("/newpost")}>Create New Post</button>
            </div>}
            <h1>     
                {
                page.map((post, id) => {
                return (<div key={id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    {isLoggedIn && <div>
                        <button
                        onClick={() => {history.push("/posts/" + post.id)}}
                        >Send Message</button>
                        </div>}
                </div>)
                })
            } 
            </h1>
            </div>)
    
}

export default Posts;