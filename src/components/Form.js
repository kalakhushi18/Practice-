import React, { Component } from 'react'

 class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username : '',
         comment : '',
         topic : 'hp'
    }
}
handleusername = (event)=> {
    this.setState({
        username : event.target.value
    })
}

handleCommentChange = (event) =>{
    this.setState({
        comment : event.target.value 
    })
}

handleTopicChange= (event)=>{
this.setState(
    {
        topic : event.target.value
    }
)
}

handleSubmit = (event) =>{

    alert(`${this.state.username}`)
    event.preventDefault()
}


    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>UserName</label>
                <input type = 'text' value = {this.state.username} onChange={this.handleusername} ></input>
                <br></br>

                <label>Comments</label>
               <textarea value = {this.state.comment} onChange={this.handleCommentChange}></textarea>
               <div>
                   <select value={this.state.topic} onChange = {this.handleTopicChange}>
                       <option >hp</option>
                       <option>narnia</option>
                       <option>Gondor</option>
                   </select>
                   
               </div>
               <button type = "submit">Submit</button>

            </form>
        )
    }
}

export default Form
