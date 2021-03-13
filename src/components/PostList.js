import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errmsg : ''
        }
    }
    //promise 

    componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts1")
    .then(response => {
        console.log(response)
        this.setState({posts : response.data})
    })
    .catch(error=>{
        console.log(error)
        this.setState({errmsg:"an error "})
    })

    }
    
    render() {
        const {posts,errmsg} = this.state
        return (
            <div>
              {
                  posts.length ?
                  posts.map(post => <div key = {post.id}>{post.title}</div>):
                  null 

              }
              {
              errmsg
              }
            </div>
        )
    }
}

export default PostList
