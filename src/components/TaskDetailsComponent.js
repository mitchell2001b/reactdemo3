import React, { Component } from "react";
import { useParams } from "react-router-dom";
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
        const url = `http://localhost:8080/api/v1/task/${this.props.match.params.id}`;

        async function getData() {
           
            const response = await fetch(url)   
            
            const data = await response.json().catch(error => console.log(error));
             
            return data;
          }

        alert(getData())
        getData().then((result) => {
        
            
            this.setState({
                task: result
            })
            
            alert(JSON.stringify(this.state.task.account.email));
        });
        
        //alert(this.props.match.params.id);
       
              
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
                          <td> {this.state.task.completed} </td>
                          <td> {this.state.task.createdat} </td> 
                          <td> {this.state.task.account.email} </td>                                        
                          <td><button type="button" className="btn btn-danger" onClick={() => DeleteTask(this.state.task.taskid)}>Delete</button></td>
                          <td><button type="button" className="btn btn-danger" onClick={() => DeleteTask(this.state.task.taskid)}>Edit</button></td>            
                          </tr>            
                         
                     </tbody>
                </table>
           </div>
        )
     }
 }
 export default withRouter(TaskDetailsComponent)