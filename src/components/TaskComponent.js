import React, { Component } from "react";
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
           
           <div>
             <h1>Tasks</h1>
             {              
                <table>               
                     <tbody>           
                         {             
                         this.state.tasks.map(task => (                         
                                 
                         <tr key={task.taskid}>                 
                         <td> {task.taskid} </td>                
                          <td> {task.title} </td>                 
                          <td> {task.discription} </td>                 
                          <td> {task.completed} </td>                
                          </tr>            
                           ))           }         
                           </tbody>
                </table>                                           
             }
           </div>
       )
   }
}

export default TaskComponent