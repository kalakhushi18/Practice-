import React, { Component } from 'react'
import FrInput from './FrInput'

 class FrInputREf extends Component {

    constructor(props) {
        super(props)
    this.inputref= React.createRef()
    }
    
    clickHandler =()=>{
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <FrInput ref={this.inputref}></FrInput>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FrInputREf
