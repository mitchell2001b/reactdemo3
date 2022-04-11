import React, { Component } from "react";
import { GetAllAccountsFromApi, GetAllEmployeeAccountsFromApi } from "./AccountGetAll";
import  { Navigate } from 'react-router-dom';
import TaskComponent from "./TaskComponent";

class TaskCreateForm extends Component {
    
    
    constructor(props) {
        super(props)
        
        this.state = {
            title: "",
            description: "",           
            createdat: "",           
            account: {},
            accounts: [],
        }
    }
    componentDidMount() {  
       
        
        //alert("ddddd");
            GetAllEmployeeAccountsFromApi().then((result) => {

                this.setState({
                    accounts: result,
                    account: {
                        "accountid": result[0].accountid
                    }
                })
            })                    
    }

    

    HandleAccountChange = (event) => {
        alert(JSON.stringify(this.state.account));
        this.setState({
            account: event.target.value
        })

        
    }
    HandleTopicChange = (event) => {
        
        this.setState({
            topic: event.target.value
        })
        alert(this.state.topic);

        
    }
    HandleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    HandleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    HandleSubmit = (event) => {
             
            let data = this.state;
            delete data.accounts;
            alert(JSON.stringify(data));
            fetch('http://localhost:8080/api/v1/task/create', {
               method: 'post',
               headers: {'Content-Type': 'application/json'},
               body:  JSON.stringify(data)           
                           
            });
            window.location.replace("/tasks");
            event.preventDefault();                 
     }

    render() {
        return (
            <div className="container-md">
                <h1 id="AccountListHeader">Accounts</h1>
                <br></br>
                {
                    <form onSubmit={this.HandleSubmit}>
                        <div>
                            <label>Title</label>
                            <input type='text' value={this.state.title} onChange={this.HandleTitleChange}></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <input type='text' value={this.state.description} onChange={this.HandleDescriptionChange}></input>
                        </div>
                        <div>
                            <label>Account</label>
                            <select value={this.state.account} onChange={this.HandleAccountChange}>         
                            {                                                              
                                this.state.accounts.map(account => (
                                    console.log(account.accountid),
                                    <option key={account.accountid} value={account.accountid}>{account.email}</option>

                                ))
                            }
                            </select>
                        </div>                       
                        <button type='submit'>Submit</button>
                        
                   </form>
                }
            </div>
        )

    }


}
export default TaskCreateForm