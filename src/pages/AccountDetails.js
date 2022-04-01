import React, { useEffect, useState, Component } from "react";
import { useParams } from "react-router";

function AccountDetails(){

   const { id } = useParams()

    

   const [acountDetails, setAccount] = useState(null)
   useEffect(() => {
    fetch(`http://localhost:8080/api/v1/account/${id}`)   
    .then(res => res.json())   
    .then(json => {     
       setAccount(json);   
             }); 
}, [`http://localhost:8080/api/v1/account/${id}`])

}
export default AccountDetails;