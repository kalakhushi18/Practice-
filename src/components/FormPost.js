import React, { Component } from 'react'
import axios from 'axios'

 class FormPost extends Component {
constructor(props) {
    super(props)

    this.state = {
         username : '',
         id : '',
         body : ''
        
    }
}
clickhandler = (e) =>{
    this.setState({
     [e.target.name] : e.target.value
    })
}

onsubmithandler=(e)=>{
    e.preventDefault()
  console.log(this.state)
  axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
  .then(response => {
      console.log(response)
  })
  .catch(error =>{
      console.log(error)
  })
}

    render() {
        const {username , id, body} = this.state 
        return (
        <form onSubmit={this.onsubmithandler}>
              <label>name</label>
              <input type = "text" name = "username" value = {username} onChange={this.clickhandler}></input>
              <br></br>
              <label>id</label>
              <input type = "text" name = "id" value = {id} onChange={this.clickhandler}></input>
              <br></br>
              <label>body</label>
              <input type = "text" name = "body" value = {body} onChange={this.clickhandler}></input>
              <br></br>
              <button type="submit" >Submit</button>
        </form>
        )
    }
}

export default FormPost
