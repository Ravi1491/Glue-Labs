import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
        this.languageRef = React.createRef()
        this.checkbox = React.createRef()
        
        this.car = {};
        for(let i=0;i<3;i++){
            const name = "car"+i
            this.car[name] = React.createRef();
        }
        this.state={
            games:{
                cricket: false,
                football: false,
                badminton: false
            },
            carname:''
        }
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value);
        console.log(this.commentRef.current.value);
        console.log(this.languageRef.current.value);
        console.log(this.state.carname);
        // console.log(this.checkbox.current.checked);
    }

    radioHandler = (event) => {
        for(var i=0;i<3;i++){
            let name = 'car'+i;
            if(event.target.value != this.car[name].current.value){
                this.car[name].current.checked = false;
            }
            else{
                this.state.carname = event.target.value;
            }
        }
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
        <>
            <div>
                <h1>RefsDemo</h1>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" ref={this.emailRef}/>
            </div>
            <br />
            <div>
                <label htmlFor="comment">Comment: </label>
                <textarea name="comment" id="comment" cols="30" rows="10"
                ref={this.commentRef}></textarea>
            </div>
            <br />
            <div>
                <label htmlFor="language">Language: </label>
                <select name="language" id="language" ref={this.languageRef}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <br />
            <div>
                <input type="radio" value="bmw" name="bmw" id="bmw" ref={this.car.car0} onChange={this.radioHandler}/>
                <label htmlFor="bmw" >BMW</label>

                <input type="radio" value="Ford" name="ford" id="ford" ref={this.car.car1} onChange={this.radioHandler}/>
                <label htmlFor="ford">Ford</label>
                
                <input type="radio" value="Tesla" name="tesla" id="Tesla" ref={this.car.car2} onChange={this.radioHandler}/>
                <label htmlFor="Tesla">Tesla</label>
            </div>
            <br />
            <div>
                <input type="checkbox"  name="cricket" ref={this.checkbox} onChange={this.checkboxHandler} />Cricket
                <input type="checkbox"  name="football" ref={this.checkbox} onChange={this.checkboxHandler} /> Football
                <input type="checkbox"  name="badminton" ref={this.checkbox} onChange={this.checkboxHandler} /> Badminton
                <div>
                    {Object.keys(this.state.games).filter((x)=>this.state.games[x])}
                </div>
                
            </div>
            <button onClick={this.clickHandler}>Submit</button>
        </>
        )
    }
}

export default RefsDemo