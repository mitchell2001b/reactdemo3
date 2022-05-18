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
        return(
         <div class="d-flex justify-content-center">

            <form onSubmit={this.HandleSubmit}>
            <div class="form-group">
                <label for="Title" style="color:white">Title</label>
                <input type="text" class="form-control" aria-describedby="title" placeholder="Enter title" onChange={this.HandleTitleChange}></input>
            </div>
            <div class="form-group">
                <label for="description" style="color:white">Description</label>
                <input type="text" class="form-control" id="description" placeholder="Enter description" onChange={this.HandleDescriptionChange}></input>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
                     
         </div>
            
        )        
    }

}
export default withRouter(TaskUpdateComponent)