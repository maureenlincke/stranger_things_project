import React from "react";

const SinglePost = ({selectedPost, isLoggedIn}) => {
    console.log(selectedPost)
    return (<div>
        <h1>{selectedPost.title}</h1>
        <h2>{selectedPost.author.username}</h2>
        <p>{selectedPost.description}</p>
        <p>{selectedPost.price}</p>
        {selectedPost.willDeliver ? <p>Will Deliver</p> : <p>Pick up only</p>}
        <p>{selectedPost.messages}</p>
        {isLoggedIn ? <div><p>Send a Message:</p><input type="text"/></div> : null}
    </div>)
}

export default SinglePost;