import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './FinalSpace.css'

const FinalSpace = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get('https://finalspaceapi.com/api/v0/character/')
        .then(res=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <>
            <h1>Final Space Character</h1>
            <div className='container'>
                {posts.map(post => (
                    <ul className='box' key={post.id}>
                        <p><img className='fsimg' src={post.img_url} /></p>
                        <p id='name'><strong> </strong>{post.name}</p>
                        <p><strong>Status: </strong>{post.status}</p>
                        <p><strong>Species: </strong>{post.species}</p>
                        <p><strong>Gender: </strong>{post.gender} </p>
                        <p><strong>Hair: </strong>{post.hair}</p>
                        <p><strong>Origin: </strong>{post.origin}</p>
                        <p><strong>Abilities: </strong>{
                            post.abilities.map(ability =>(<p id='ability' key={ability}>"{ability}",</p>))
                        }   
                        </p>
                        <p><strong>Alias: </strong>{
                            post.alias.map(alias =>(<p id='alias' key={alias}>"  {alias}  ",</p>))
                        }   
                        </p>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default FinalSpace