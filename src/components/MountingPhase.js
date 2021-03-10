import React, { Component } from 'react'

 class MountingPhase extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : "hello"
        }

        console.log("constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getdervidestatefromprops")
        return null 
    }
    componentDidMount(){
        console.log("componentdidmount")
    }
    
    render() {
        console.log("rendermethod")
        return (
            <div>
                
            </div>
        )
    }
}

export default MountingPhase
// 1 . constructor -- getderived -- render -- componentdid