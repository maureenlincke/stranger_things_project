import React, { useEffect, useState } from "react";
import Search from "./Search";
import { findPostByID } from "../apiHelpers";

const Posts = ({history, page, setSelectedPost}) => {
    const [filteredResults, setFilteredResults] = useState(page)

    useEffect(() => {
        setFilteredResults(page)
    }, [page])
    
    return (<div> 
        <Search page={page} setFilteredResults={setFilteredResults}/>
            <div class="container overflow-hidden">     
                {
                filteredResults.map((post) => {
                return (<div key={post._id} class="p-3 border bg-light">
                    <h1 class="display-6" 
                    onClick={() => {
                        const mySelectedPost = findPostByID(post._id, page)
                        setSelectedPost(mySelectedPost)
                        history.push("/posts/" + post._id)
                    }}
                    >{post.title}</h1>
                    <p class="lead">{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                </div>)
                })
            } 
            </div>
            </div>)
    
}

export default Posts;