import React, { Component } from "react";
import { GetAllAccountsFromApi } from "./AccountGetAll";

class TaskCreateForm extends Component
{
    constructor(props)
    {
        super(props)

        let accounts = [];

        this.state = {
            title: "",
            discription: "",
            account: "",
            createdat: "",
            accounts: [],          
        }

        GetAllAccountsFromApi().then((result) => {
                
            this.setState({
                accounts: result
            })
        })   

        
    }
    
    render()
    {
        
            return(
                
                <div className="container-md">           
                  <h1 id="AccountListHeader">Accounts</h1>
                  <br></br>
                  {              
                     <table className="table table-dark">               
                          <tbody>           
                              {             
                              this.state.accounts.map(account => ( 
                              console.log(account.accountid), 
                                      
                              <tr key={account.accountid}>                 
                              <td> {account.accountid} </td>                
                               <td> {account.name} </td>                 
                               <td> {account.passWord} </td>                 
                               <td> {account.email} </td>                  
                               </tr>            
                                ))           }         
                                </tbody>
                     </table>                                           
                  }
                </div>
            )
        
    }

    
}
export default TaskCreateForm