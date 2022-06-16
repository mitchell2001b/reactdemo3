import React, { Component } from "react";


class Form extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            dateofbirth: "",       
        }
    }
    
    HandleNameChange = (event) => {
       this.setState({
           name: event.target.value
       })
    }

    HandleDateOfBirthChange = (event) => {
        this.setState({
            dateofbirth: event.target.value
        })
     }
     HandlePassWordChange = (event) => {
        this.setState({
            password: event.target.value
        })
     }
     HandleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
     }
     //test
     HandleSubmit = (event) => {
        alert(`${this.state.dateofbirth}`);
        alert(JSON.stringify(this.state));
        fetch('http://localhost:8080/api/v1/account/create', {
           method: 'post',
           headers: {'Content-Type': 'application/json'},
           body:  JSON.stringify(this.state)           
                       
        });
        event.preventDefault();
     }
    render()
    {
       return(
           <form onSubmit={this.HandleSubmit}>
               <div>
                   <label>name</label>
                   <input type='text' value={this.state.name} onChange={this.HandleNameChange}></input>
               </div>
               <div>
                   <label>email</label>
                   <input type='text' value={this.state.email} onChange={this.HandleEmailChange}></input>
               </div>
               <div>
                   <label>password</label>
                   <input type='password' value={this.state.password} onChange={this.HandlePassWordChange}></input>
               </div>
               <div>
                   <label>Date of Birth</label>
                   <input type='date' value={this.state.dateofbirth} onChange={this.HandleDateOfBirthChange}></input>
               </div>
               <button type='submit'>Submit</button>
           </form>
       )     
    }

}
export default Form
