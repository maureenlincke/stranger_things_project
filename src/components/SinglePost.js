import React, {useEffect} from "react";
import { findPostByID } from "../apiHelpers";

const SinglePost = ({match, page, selectedPost, setSelectedPost, isLoggedIn, username, findPostByID}) => {
    // useEffect(() => {
    //     console.log("useEffect has fired")
    //     const postId = Number(match.params.postId)
    //     const foundPost = findPostByID(postId, page);
        
    //     setSelectedPost(foundPost)
    // }, [page])

    // console.log(page)
    // console.log(selectedPost)
    
    return (
        // page.length && 
        <div>
        <h1>{selectedPost.title}</h1>
        <h2>{selectedPost.author.username}</h2>
        <p>{selectedPost.description}</p>
        <p>{selectedPost.price}</p>
        {selectedPost.willDeliver ? <p>Will Deliver</p> : <p>Pick up only</p>}
        <p>{selectedPost.messages}</p>
        {isLoggedIn ? <div><p>Send a Message:</p><input type="text"/></div> : null}
        {selectedPost.author.username === username ? <input type="submit">Delete Post</input> : null}
    </div>)
}

export default SinglePost;