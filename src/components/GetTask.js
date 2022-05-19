export async function GetTaskByIdFromApi(taskid)
{
    if(taskid != 0)
    {
        const response = await fetch(`http://localhost:8080/api/v1/task/${taskid}`)   
            
        const data = await response.json().catch(error => console.log(error));
          
        return data;  
    }
    else
    {
        return null;
    }
    

}