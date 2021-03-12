import React, { Component } from 'react'

 class Refs extends Component {

    constructor(props) {
        super(props)
    
      this.inputref = React.createRef()
    }

    componentDidMount(){
        this.inputref.current.focus()
    }

    clickhandler(){
        alert(this.inputref.current.value)
    }
    
    render() {
        return (
            <div>
                <input type = "text"  ref={this.inputref}></input>
                <button onClick={()=>this.clickhandler()}>click</button>
            </div>
        )
    }
}

export default Refs

