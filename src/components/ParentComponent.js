import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         message : "hello"
    }
    this.greet = this.greet.bind(this)
}
 greet(childname){
     alert(`Hello ${this.state.message} from ${childname}`)
 }

    render() {
        return (
            <div>
                <ChildComponent greetchild = {this.greet}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
