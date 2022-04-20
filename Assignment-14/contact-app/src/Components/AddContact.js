import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: ''
        }
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("please fill all the fields")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''})
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className="feild">
                        <label>Name: </label>
                        <input type="text" placeholder='Name' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                    </div>
                    <br />
                    <div className="feild">
                        <label>Email: </label>
                        <input type="text" placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <br />
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact