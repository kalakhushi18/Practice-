import React from 'react'

const Hello = () => {

    // return (
    //     <h1>Hello there </h1>
    // )

    //jsx 
    return React.createElement('div',  {id : "h", className : "v"}, React.createElement('h1',null , "Hello other "))
}

export default Hello