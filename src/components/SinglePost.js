//NOTE
// - The link to this component works and the URL changes (when a logged in user clicks "Send Message"), 
//      - but the div is being overwritten by the posts
// - You can see the issue when you click "Send Message" then refresh the page
//      - The page shows "Heyo" for a second before the posts overwrite it

import React from "react";

const SinglePost = () => {
    return <h1>Heyo</h1>
}

export default SinglePost;