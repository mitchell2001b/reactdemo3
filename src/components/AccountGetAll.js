export async function GetAllAccountsFromApi()
{
    
   const response = await fetch("http://localhost:8080/api/v1/account")   
            
   const data = await response.json().catch(error => console.log(error));
          
   return data;  
}

export async function GetAllEmployeeAccountsFromApi()
{
    
   const responseVar = await fetch("http://localhost:8080/api/v1/account/employees")
       
   if(responseVar.ok)
   {
      //throw new Error("bb");
   }
            
   const data = await responseVar.json().catch(error => console.log(error));
          
   return data;  
}