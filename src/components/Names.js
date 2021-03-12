import React from 'react'

function Names({name}) {
 if(name === "a"){
     throw new Error("not a joke ")
 }
    return (
    
      {name}
    )
}

export default Names
