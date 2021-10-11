import React, {useState} from "react";

export default ({page, setFilteredResults}) => {
    const [searchTerm, setSearchTerm] = useState("");

    function filterPosts(page, searchTerm){
        searchTerm = searchTerm.toLowerCase()
        return page.filter((post, index) => {
            const postTitle = post.title.toLowerCase();
            return postTitle.includes(searchTerm)
        })
    }

    return (<div>
        <label>Search Posts</label>
        <input 
        value={searchTerm}
        onChange={
            (event) => {
                setSearchTerm(event.target.value);
                const myFilteredPosts = filterPosts(page, event.target.value);
                setFilteredResults(myFilteredPosts)
            }
        } placeholder="search"/>
    </div>)
}