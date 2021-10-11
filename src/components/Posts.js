import React, { useEffect, useState } from "react";
import Search from "./Search";

const Posts = ({isLoggedIn, history, page}) => {
    const [filteredResults, setFilteredResults] = useState(page)

    useEffect(() => {
        setFilteredResults(page)
    }, [page])
    
    return (<div> 
        <Search page={page} setFilteredResults={setFilteredResults}/>
            <div>     
                {
                filteredResults.map((post) => {
                return (<div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    {isLoggedIn && <div>
                        <button
                        onClick={() => {history.push("/posts/" + post._id)}}
                        >Send Message</button>
                        </div>}
                </div>)
                })
            } 
            </div>
            </div>)
    
}

export default Posts;