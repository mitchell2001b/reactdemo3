import { Navigate } from 'react-router-dom';

export default async function DeleteAccount(id)
{
    if(id !== 0)
    {
        fetch(`http://localhost:8080/api/v1/account/${id}`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},       
                        
         });

        window.location.reload(false);
    }

    
}