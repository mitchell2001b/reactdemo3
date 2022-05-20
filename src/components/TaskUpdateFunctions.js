export async function UpdateTaskCompletedStatus(taskId, completed)
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

export async function UpdateTaskDetails(taskId, title, description, accountid)
{
    const data = {
        
        taskid: taskId,
        title: title,
        description: description,
        account: {
            "accountid": accountid
        }

    };
    
    fetch(`http://localhost:8080/api/v1/task/${taskId}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body:  JSON.stringify(data)           
                    
     });

     window.location.reload(true);
}

//sonar testt