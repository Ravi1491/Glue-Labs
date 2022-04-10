import React, { Component } from 'react'

export default class Demoform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment:'',
            language: 'Angular',
            cars: '',
            games:{
                cricket: false,
                football: false,
                badminton: false
            }
        }
    }

    changeEmailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    commentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    Changelang = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    
    submitHandle = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    radioHandler = (e) =>{
        this.setState({
            cars: e.target.value
        })
    }

    checkboxHandler = (e) =>{
        let {name,checked} = e.target;
        this.setState((e)=>{
            var SelectedSport = e.games;
            return SelectedSport[name] = checked;
        })
    } 


    render() {
        return (
            <form onSubmit={this.submitHandle}>
                <div>
                    <h1>Demoforms</h1>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text"  id='email' value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea name="comment" id="comment" cols="20" rows="4" value={this.state.comment} onChange={this.commentHandler}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">language: </label>
                    <select name="language" id="language" value={this.state.language} onChange={this.Changelang}>
                        <option value="react">React</option>
                        <option value="vue">vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    <input type="radio" value="BMW" name="BMW" id="BMW" checked={this.state.cars === 'BMW'} onChange={this.radioHandler}/>
                    <label htmlFor="bmw" >BMW</label>

                    <input type="radio" value="Ford" name="Ford" id="ford" checked={this.state.cars === 'Ford'} onChange={this.radioHandler}/>
                    <label htmlFor="ford">Ford</label>
                    
                    <input type="radio" value="Tesla" name="Tesla" id="Tesla" checked={this.state.cars === 'Tesla'} onChange={this.radioHandler}/>
                    <label htmlFor="Tesla">Tesla</label>

                </div>
                <br />
                <div>
                    <input type="checkbox"  name="cricket"  onChange={this.checkboxHandler} />Cricket
                    <input type="checkbox"  name="football"  onChange={this.checkboxHandler} /> Football
                    <input type="checkbox"  name="badminton"  onChange={this.checkboxHandler} /> Badminton
                    <div>
                        {Object.keys(this.state.games).filter((x)=>this.state.games[x])}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }   
}
