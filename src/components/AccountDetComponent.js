import React, { Component } from "react";
import { useParams } from "react-router-dom";

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }
class AccountDetComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            account:{}
        }
    }

  
    componentDidMount() {
        const url = `http://localhost:8080/api/v1/account/${this.props.match.params.id}`;

        async function getData() {
           
            const response = await fetch(url)   
            
            const data = await response.json().catch(error => console.log(error));
             
            return data;
          }

        alert(getData())
        getData().then((result) => {
        
            
            this.setState({
                account: result
            })
            

        });
        //alert(this.props.match.params.id);
       
              
     }
     render(){
        return(          
            <div>                                    
                <h1>{this.state.account.email}</h1>    
           </div>
        )
     }
}

export default withRouter(AccountDetComponent)