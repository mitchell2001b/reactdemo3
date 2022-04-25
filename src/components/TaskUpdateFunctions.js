export async function MarkTaskAsCompleted(taskId, completed)
{
    const data = {
        
        taskid: taskId,
        completed: completed
    };
    fetch(`http://localhost:8080/api/v1/task/${taskId}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify(data)           
                    
     });

     window.location.reload(true);
}