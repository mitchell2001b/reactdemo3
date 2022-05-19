import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { GetTaskByIdFromApi } from "./GetTask";
import DeleteTask from './TaskDelete';
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

 class TaskDetailsComponent extends Component
 {
    constructor(props)
    {
        super(props)
        this.state = {
            task:{ account: {}}
        }
    }

  
    componentDidMount() {
       
        //alert(this.props.match.params.id);
        GetTaskByIdFromApi(this.props.match.params.id).then((result) => {

            this.setState({
                task: result,
                
            })
        }) 
              
     }
    
     render(){
        return(          
            <div>
                 <h1 id="TaskListHeader">Task Details</h1>                                                  
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
                             
                             
                                                
                                 
                          <tr>                 
                          <td> {this.state.task.taskid} </td>                
                          <td> {this.state.task.title} </td>                 
                          <td> {this.state.task.description} </td>                                         
                          <td> {String(this.state.task.completed)} </td>
                          <td> {this.state.task.createdat} </td> 
                          <td> {this.state.task.account.email} </td>                                        
                          <td><a href={"update/" + this.state.task.taskid} class="link-primary">Edit</a></td>
                          <td><button type="button" className="btn btn-danger" onClick={() => DeleteTask(this.state.task.taskid)}>Delete</button></td>            
                          </tr>            
                         
                     </tbody>
                </table>
           </div>
        )
     }
 }
 export default withRouter(TaskDetailsComponent)