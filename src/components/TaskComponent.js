import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './general.css';
import './TaskList.css';
import DeleteTask from './TaskDelete';
import { MarkTaskAsCompleted } from "./TaskUpdateFunctions";
class TaskComponent extends Component
{
   isAdmin = true; 
   user = { accountid: 3}
   constructor(props)
   {
       super(props)
       this.state = {
           tasks:[]
       }
   }
   
   componentDidMount() {
       if(this.isAdmin)
       {
            fetch("http://localhost:8080/api/v1/task")   
            .then(res => res.json())   
            .then(json => {     
                this.setState({       
                    tasks: json               
                    })   
                    }); 
       }
       else
       {
           let data = this.user;
            fetch("http://localhost:8080/api/v1/task/MyTasks", {
               method: 'post',
               headers: {'Content-Type': 'application/json'},
               body:  JSON.stringify(data) 
            })
               
            .then(res => res.json())   
            .then(json => {     
                this.setState({       
                    tasks: json               
                    })   
                    });
       }        
    }
 
   
   render(){
       //alert(JSON.stringify(this.state.tasks));
           
       if(this.isAdmin)
       {
        return(
         
            <div className="container-md">
                <br></br>
                <h1 id="TaskListHeader">Tasks Admin</h1>
                {    
                   
                        <table className="table table-dark">               
                        <tbody>
                            <tr>
                             <th>Id</th>
                             <th>Title</th>
                             <th>Description</th>
                             <th>Completed</th>                           
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
                                      <td> {String(task.completed)}</td>                                                                    
                                      <td><a href={"tasks/" + task.taskid} class="link-primary">Details</a></td>                                                              
                                      <td><button type="button" class="btn btn-primary" onClick={() => DeleteTask(task.taskid)}>Edit</button></td>
                                      <td><button type="button" class="btn btn-danger" onClick={() => DeleteTask(task.taskid)}>Delete</button></td>            
                                      </tr>            
                                          ))           
                                  }         
                              </tbody>
                           </table>
                    
                    
                    }      
            </div>
                 
               
           )
       }
       else
       {
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
                             <th></th>
                             <th></th>                           
                            </tr>            
                                  {         
                                          
                                      this.state.tasks.map(task => (                         
                                              
                                      <tr key={task.taskid}>                 
                                      <td> {task.taskid} </td>                
                                      <td> {task.title} </td>                 
                                      <td> {task.description} </td>
                                      <td> {String(task.completed)} </td>                                                                    
                                      <td><a href={"tasks/" + task.taskid} class="link-primary">Details</a></td>                                                                                                                                     
                                      <td><button type="button" class="btn btn-primary" onClick={() => MarkTaskAsCompleted(task.taskid, true)}>Mark as completed</button></td>             
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
}

export default TaskComponent