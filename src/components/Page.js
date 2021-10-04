import React, { useEffect, useState } from "react";
import { BASE_URL } from '../constants'

const Page = () => {
    const postsUrl = BASE_URL + '/posts'

    return (
        fetch(postsUrl)
        .then(response => response.json())
        .then(result => {
        console.log(result);
        })
        .catch(console.error)
    )
}

export default Page;