import React from 'react'

// function Greet(){
// return <h1>Hello everyone !!!</h1>
// }
//props are immutble 
// const Greet = (props) => {
// return (
//     <div>
// <h1>Hello {props.name} </h1>
// <p>{props.children}</p>
//     </div>


// )
// }
// const Greet = ({name,other}) => {
//     return (
//         <div>
//     <h1>Hello {name} hi{other} </h1>
    
//         </div>
    
    
//     )
//     }
const Greet = (props) => {
    const {name , other } = props
    return (
        <div>
    <h1>Hello {name} and {other } </h1>
    <p>{props.children}</p>
        </div>
    
    
    )
    }

export default Greet  
//with any name you can give to the component 
//destructing in params 
//destructring in body 