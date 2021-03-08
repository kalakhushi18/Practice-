import React,{Component} from 'react'

class Welcome extends Component {
    render(){
        const {name , other} = this.props 
        return <h1>welcome {name} other {other }</h1>
    }

}

export default Welcome