import { useState, useEffect } from "react";

function Fetcher(){
    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
        setLoading(false)
    }, [])
    if(loading) return <p>Loading</p>

    return(
       <ol>
        {posts.slice(0,5).map(post => (
            <li key = {post.id}> 
            <h3>TITLE: {post.title} </h3>
            <p>BODY: {post.body}</p>
            </li>
        ))}
       </ol>
    )
}

export default Fetcher