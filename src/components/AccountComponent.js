import React, { Component } from "react";
import AccountService from "../services/AccountService";
import UserService from '../services/AccountService';

class AccountComponent extends Component
{
   constructor(props)
   {
       super(props)
       this.state = {
           accounts:[]
       }
   }
   
   componentDidMount() {   
       fetch("http://localhost:8080/api/v1/account")   
       .then(res => res.json())   
       .then(json => {     
           this.setState({       
               accounts: json               
                 })   
                }); 
    }


   render(){
       return(
           
           <div>
             <h1>Accounts</h1>
             {              
                <table>               
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

export default AccountComponent