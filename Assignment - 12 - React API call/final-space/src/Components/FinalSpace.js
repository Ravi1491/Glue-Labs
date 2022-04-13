import React, { Component } from 'react'
import './FinalSpace.css'

export default class FinalSpace extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const url = 'https://finalspaceapi.com/api/v0/character/';
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
            posts: data
        })
        // console.log(data)
    }

    render() {
        const { posts } = this.state
        return (
            <>
                <h1>Final Space Character's</h1>
                <div className='container'>
                    {posts.map(post => (
                        <ol className='box' key={post.id}>
                            <p><img className='fsimg' src={post.img_url} alt="" /></p>
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
                        </ol> 
                    ) )}
                </div>
            </>
        )
    }
}
