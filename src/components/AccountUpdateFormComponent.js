import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { withRouter } from "../RouterFunctions"


class AccountUpdateFormComponent extends Component{

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
 
      HandleSubmit = (event) => {
         alert(`${this.state.dateofbirth}`);
         alert(JSON.stringify(this.state));
         fetch(`http://localhost:8080/api/v1/account/${this.props.match.params.id}`, {
            method: 'put',
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
               
               <button type='submit'>Submit</button>
           </form>
       )     
    }
}

export default withRouter(AccountUpdateFormComponent)