import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './general.css';
import './TaskList.css';
import DeleteTask from './TaskDelete';
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
                          <th></th>
                          <th></th>
                          <th></th>
                      </tr>            
                      {         
                             
                         this.state.tasks.map(task => (                         
                                 
                         <tr key={task.taskid}>                 
                         <td> {task.taskid} </td>                
                          <td> {task.title} </td>                 
                          <td> {task.description} </td>                                                                   
                          <td><a href={"tasks/" + task.taskid} class="link-danger">Details</a></td>                        
                          <td><button type="button" class="btn btn-danger" onClick={() => DeleteTask(task.taskid)}>Delete</button></td>
                          <td><button type="button" class="btn btn-danger" onClick={() => DeleteTask(task.taskid)}>Edit</button></td>            
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