import { Component } from "react";
import { withRouter } from "../RouterFunctions"
import { GetAllEmployeeAccountsFromApi }  from "./AccountGetAll";
import { GetTaskByIdFromApi } from "./GetTask";

class TaskUpdateComponent extends Component {

    isAdmin = true;
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            account: { accountid: "" },
            accounts: [],
            task: { account: {}}
        }
    }

    componentDidMount() {  
       
        GetAllEmployeeAccountsFromApi().then((result) => {

            this.setState({
                accounts: result,               
            })
        }) 
        //alert("ddddd");
            GetTaskByIdFromApi(this.props.match.params.id).then((result) => {

                this.setState({
                    task: result,
                    account: {
                        "accountid": result.account.accountid
                    }                  
                })
            })                    
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

    HandleAccountChange = (event) => {
        alert(JSON.stringify(this.state.account));
        this.setState({
            account: {
                "accountid": event.target.value
            }
        
        })        
    }

    HandleSubmit = (event) => {
        //alert(`${this.state.dateofbirth}`);
        alert(JSON.stringify(this.state));
        fetch(`http://localhost:8080/api/v1/task/${this.props.match.params.id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)

        });
        event.preventDefault();
        window.location.replace('/tasks');
    }

    render() {
        return (

            <div className="d-flex justify-content-center">
                <form onSubmit={this.HandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Title" style={{ color: 'white' }}>Title</label>
                        <input type="text" className="form-control" aria-describedby="title" placeholder={this.state.task.title} onChange={this.HandleTitleChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" style={{ color: 'white' }}>Description</label>
                        <input type="text" className="form-control" id="description" placeholder={this.state.task.description} onChange={this.HandleDescriptionChange}></input>
                    </div>
                    <div className="form-group col-md-4">
                      <label style={{color : 'white'}}>Employee</label>
                        <select value={this.state.account.accountid} onChange={this.HandleAccountChange}>         
                        {                                                              
                            this.state.accounts.map(account => (
                                console.log(account.accountid),
                                <option key={account.accountid} value={account.accountid}>{account.email}</option>

                            ))
                        }
                        </select>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>

            </div>

        )
    }

}
export default withRouter(TaskUpdateComponent)