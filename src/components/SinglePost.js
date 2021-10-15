import React from "react";

const SinglePost = ({selectedPost, isLoggedIn, username}) => {
    console.log(isLoggedIn)
    console.log(selectedPost)
    console.log(selectedPost.author.username)
    console.log(username)
    return (<div>
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