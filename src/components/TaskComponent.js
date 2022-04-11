import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './general.css';
import './TaskList.css';
import DeleteAccount from './AccountDelete';
class TaskComponent extends Component
{
   constructor(props)
   {
       super(props)
       this.state = {
           tasks:[]
       }
   }
   
   componentDidMount() {   
       fetch("http://localhost:8080/api/v1/task")   
       .then(res => res.json())   
       .then(json => {     
           this.setState({       
               tasks: json               
                 })   
                }); 

    }
 
    

   render(){
       return(
           
        <div className="container-md">
            <br></br>
            <h1 id="TaskListHeader">Tasks</h1>
             {              
                <table className="table table-dark">               
                     <tbody>
                     <tr>
                          <th>Id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Completed</th>
                          <th>Date of Creation</th>
                          <th>Employee</th>
                          <th></th>
                          <th></th>
                      </tr>            
                      {         
                             
                         this.state.tasks.map(task => (                         
                                 
                         <tr key={task.taskid}>                 
                         <td> {task.taskid} </td>                
                          <td> {task.title} </td>                 
                          <td> {task.description} </td>                                         
                          <td> {task.completed} </td>
                          <td> {task.createdat} </td> 
                          <td> {task.account.email} </td>
                          <td><a href={"accounts/" + task.account.accountid}>Details</a></td>
                          <td><Button onClick={() => DeleteAccount(task.account.accountid)}>Delete</Button></td>                 
                          </tr>            
                           ))           
                      }         
                     </tbody>
                </table>                                           
             }


        </div>
             
           
       )
   }
}

export default TaskComponent