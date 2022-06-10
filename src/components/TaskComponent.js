import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './general.css';
import './TaskList.css';
import DeleteTask from './TaskDelete';
import { UpdateTaskCompletedStatus } from "./TaskUpdateFunctions";
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
                
        return(
                     
            <div className="container-md">
                <br></br>
                
                <h1 id="TaskListHeader">Tasks</h1>
                { this.isAdmin ? <a href={"/taskform"} class="link-primary">Create New Task</a> : <h1></h1> }
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
                                      {this.isAdmin ?  <td><a href={"tasks/" + task.taskid} class="link-primary">Details</a></td> : <td><a href={"tasks/" + task.taskid} class="link-primary">Details</a></td> }
                                      {this.isAdmin ?   <td><a href={"tasks/update/" + task.taskid} class="link-primary">Edit</a></td> : task.completed ? <td><button type="button" class="btn btn-danger" onClick={() => UpdateTaskCompletedStatus(task.taskid, false)}>Mark as uncompleted</button></td> : <td><button type="button" class="btn btn-primary" onClick={() => UpdateTaskCompletedStatus(task.taskid, true)}>Mark as completed</button></td>  }    
                                      {this.isAdmin ?   <td><button type="button" class="btn btn-danger" onClick={() => DeleteTask(task.taskid)}>Delete</button></td>   : <td></td> }                                                                    
                                                                                             
                                     
                                               
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