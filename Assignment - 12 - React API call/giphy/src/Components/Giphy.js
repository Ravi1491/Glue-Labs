import React, { Component } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './Giphy.css'
import TextList from './TextList'

class Giphy extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            text: '',
            giphys: []
        }
        this.changeSearchHandle = this.changeSearchHandle.bind(this)
        this.changeSubmit = this.changeSubmit.bind(this)
    }

    changeSearchHandle = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.text)
    }

    changeSubmit = (event) => {
        const giphyapi = async () => {
            const key = new GiphyFetch('AJ4lFuY9sfMKoEcWWVePlhKsM2AiRcZF');
            const res = await key.animate(this.state.text,{limit: 20})
            
            this.setState({
                giphys: res.data
            })
        } 
        giphyapi()
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>Giphy Search</h1>
                <div>
                    <label> Search: </label>
                    <input type="text" className='input-field' value={this.state.text} placeholder='Giphy Search' onChange={this.changeSearchHandle}/>
                </div>
                <button type="submit" className='submit-btn' onClick={this.changeSubmit}>Search</button>
                <TextList gifs={this.state.giphys}/>
            </div>
        )
    }
}

export default Giphy
// 