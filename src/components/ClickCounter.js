import React, { Component } from 'react'

 class ClickCounter extends Component {
constructor(props) {
    super(props)

    this.state = {
         count : 0 
    }
}

clickHandler =()=>{
    this.setState(previous=>{
        return {count : previous.count + 1}
    })
}



    render() {
        const counter = this.state.count 
        return (
            <div>

                <button onClick={this.clickHandler}>Click {counter}times</button>
            </div>
        )
    }
}

export default ClickCounter

//onmouseover for hover