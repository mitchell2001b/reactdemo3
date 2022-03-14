import React, { Component } from "react";


class Form extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name: "",
            comments: "",
            topic: "option1"
        }
    }

    HandleNameChange = (event) => {
       this.setState({
           name: event.target.value
       })
    }

    HandleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
     }
     HandleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
     }

     HandleSubmit = (event) => {
        alert(`${this.state.name}`);
        event.preventDefault();
     }
    render()
    {
       return(
           <form onSubmit={this.HandleSubmit}>
               <div>
                   <label>UserName</label>
                   <input type='text' value={this.state.name} onChange={this.HandleNameChange}></input>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={this.state.comments} onChange={this.HandleCommentsChange}></textarea>
               </div>
               <div>
                   <label>Topic</label>
                   <select value={this.state.topic} onChange={this.HandleTopicChange}> 
                       <option value="option1">Option1</option>
                       <option value="option2">Option2</option>
                       <option value="option3">Option3</option>
                   </select>
               </div>
               <button type='submit'>Submit</button>
           </form>
       )     
    }

}
export default Form
