import { Component } from "react";
import { withRouter } from "../RouterFunctions"

class TaskUpdateComponent extends Component{

    isAdmin = true; 
    constructor(props)
    {
        super(props)
        this.state = {
            title: "",
            description: "",        
            account: { accountid: "" }  
        }
    }

    HandleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
     }
     HandleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
     }

     HandleSubmit = (event) => {
        //alert(`${this.state.dateofbirth}`);
        alert(JSON.stringify(this.state));
        fetch(`http://localhost:8080/api/v1/task/${this.props.match.params.id}`, {
           method: 'put',
           headers: {'Content-Type': 'application/json'},
           body:  JSON.stringify(this.state)           
                       
        });
        event.preventDefault();
     }

    render()
    {
       if(this.state.isAdmin)
       {
            return(
                <form onSubmit={this.HandleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type='text' value={this.state.title} onChange={this.HandleTitleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type='text' value={this.state.description} onChange={this.HandleDescriptionChange}></input>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            ) 
       }
       
           
    }

}
export default withRouter(TaskUpdateComponent)