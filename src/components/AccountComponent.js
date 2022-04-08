import React, { Component } from "react";
import AccountService from "../services/AccountService";
import UserService from '../services/AccountService';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './general.css';
import './AccountList.css';
import DeleteAccount from './AccountDelete';
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
                          <td><a href={"accounts/" + account.accountid}>Details</a></td>
                          <td><Button onClick={() => DeleteAccount(account.accountid)}>Delete</Button></td>                  
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