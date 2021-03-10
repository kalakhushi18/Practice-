import React, { Component } from 'react'

class Conditional extends Component{

    constructor(){
        super()

        this.state=
           { login : false 
           }
        
    }

    render(){

        // if(this.state.login){
        //     return (
        //         <div>Hello </div>
        //     )
        // }else {
        //     return (
        //         <div>Bye </div>
        //     )
        // }

       return   (this.state.login)?<div>Hello</div> : <div>Bye</div>

    
       
    }
}
export default Conditional


//adding if else within jsx is not possible 
// variable approach ==> let use 
//fourth approach 
// to evaluate js code {} is required 
//list ==> key 
