import React from 'react'

 function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick ={props.greetchild} >Greet </button> */}
            <button onClick = {()=> props.greetchild('child')}>Greet from child </button>
        </div>
    )
}

export default ChildComponent