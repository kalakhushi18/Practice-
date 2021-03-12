import React, { Component } from 'react'

 class ErroBoudary extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              haserror: false 
         }
     }
     

    static getDerivedStateFromError(error){
        return{
            haserror: true 
        }
    }
    componentDidCatch(error,info){
        console.log( info)
    }
    render() {
      if(this.state.haserror){
          return <h1>Something went wrong </h1>
      }else {
      return this.props.children
      }
    }
}

export default ErroBoudary
