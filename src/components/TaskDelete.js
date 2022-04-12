export default async function DeleteTask(id)
{
    if(id !== 0)
    {
        fetch(`http://localhost:8080/api/v1/task/${id}`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},                            
         });

        window.location.reload(false);
    }  
}