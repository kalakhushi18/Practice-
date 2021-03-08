import React, { Component } from 'react'

 class BindingEvent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message : "hello"
         }
      //this.clickhandler=    this.clickhandler.bind(this)
     }
     
//      clickhandler(){
//   this.setState({
//     message:"good"
// })
//      }
    clickhandler = ()=> {
    this.setstate({
        message:"good"
        }
    )
    console.log("good")
}
    render() {
        return (
            // <div>
            //     <p>{this.state.message}</p>
            //    <button onClick = {this.clickhandler.bind(this)}>Bind event </button> 
            // </div>

            // <div>
            //     <p>{this.state.message}</p>
            //    <button onClick ={()=>this.clickhandler()} >Bind event </button> 
            // </div>
            
            <div>
                <p>{this.state.message}</p>
               <button onClick ={this.clickhandler} >Bind event </button> 
            </div>
        )
    }
}

export default BindingEvent
