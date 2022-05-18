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
            account: {
                "accountid": event.target.value
            }
        
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
            <div class="d-flex justify-content-center">

                <form onSubmit={this.HandleSubmit}>
                <div class="form-group">
                    <label for="Title" style="color:white">Title</label>
                    <input type="text" class="form-control" aria-describedby="title" placeholder="Enter title" onChange={this.HandleTitleChange}></input>
                </div>
                <div class="form-group">
                    <label for="description" style="color:white">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter description" onChange={this.HandleDescriptionChange}></input>
                </div>
                <div class="form-group col-md-4">
                    <label style="color:white">Employee</label>
                        <select value={this.state.account.accountid} onChange={this.HandleAccountChange}>         
                        {                                                              
                            this.state.accounts.map(account => (
                                console.log(account.accountid),
                                <option key={account.accountid} value={account.accountid}>{account.email}</option>

                            ))
                        }
                        </select>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                         
            </div>
            
         )

    }


}
export default TaskCreateForm