import axios from 'axios'
import React, { useState } from 'react'

const PostForm = () => {
    const [userId,setUserId] = useState(1)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const state={userId:userId,
            title:title,
            body:body,
        }
        const setting = {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        }

        axios.post(url,state,setting)
        .then(res => {
            console.log(res.data);
        });

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label >UserId: </label>
                <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
            </div>
            <br />
            <div>
                <label >Title: </label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <br />
            <div>
                <label >Body: </label>
                <input type="text" value={body} onChange={e => setBody(e.target.value)} />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PostForm