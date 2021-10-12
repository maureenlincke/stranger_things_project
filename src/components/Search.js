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

    return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <form class="d-flex">
                <button class="btn btn-outline-success" type="submit">Search</button>
                <input 
                value={searchTerm}
                onChange={
                    (event) => {
                        setSearchTerm(event.target.value);
                        const myFilteredPosts = filterPosts(page, event.target.value);
                        setFilteredResults(myFilteredPosts)
                    }
                } placeholder="search"
                class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
        </div>
    </nav>)
}