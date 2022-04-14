import React, { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './Giphy.css'
import TextList from './TextList'

const Giphy = () => {
    const [posts,setPosts] = useState([])
    const [text,setText] = useState('')

    const changeSubmit = () =>{
    
        const giphyapi = async () => {
            const key = new GiphyFetch('AJ4lFuY9sfMKoEcWWVePlhKsM2AiRcZF');
            const res = await key.animate(text,{limit: 30})
            setPosts(res.data)
        }
        giphyapi()
        setText('')
    }

    return (
        <div>
            <h1>Giphy search</h1>
            <div>
                <label >Search: </label>
                <input type="text" className='input-field' value={text} onChange={e => setText(e.target.value)}/>
            </div>
            <button type='submit' className='submit-btn' onClick={changeSubmit}>Search</button>
            <TextList gifs={posts}/>
        </div>
    )
}

export default Giphy