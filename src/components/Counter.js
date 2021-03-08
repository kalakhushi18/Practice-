import React, { Component } from 'react'

//rce through es7 extension download 
 class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0  
        }
    }
    //setstate has two params object and callback function //setstate first param can be an function which have previous value 
    increment(){
        // this.setState({
        //     // count:this.state.count +1
        // }, 
        this.setState( (previoustate=>({
       count : previoustate.count + 1 
        })),
    ()=>{
            console.log("callback",this.state.count)
        })
        console.log("callback outside ",this.state.count)
    }
    
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
               <p> {this.state.count}</p> 
               <button onClick={()=> this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
