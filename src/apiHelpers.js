import { BASE_URL } from "./constants"

export async function getPage(){
    const pageURL = BASE_URL + '/posts'
    try{
        const response = await fetch(pageURL);
        const {data: {posts}} = await response.json()
        return posts
    } catch (err) {
        console.error(err)
    }
}

export function findPostByID(postId, page){
    const myPost = page.find(post => post._id === postId);
    return myPost;
    // if(!myPost) return {}
    // else myPost;
}