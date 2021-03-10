import React from 'react'

function List(){
const arr = ["h","a","b"]
const names  = arr.map((x,index)=> <h1 key = {index}>{x}</h1>)
    return(
    //  <div>
    //      <h1>{arr[0]}</h1>
    //      <h1>{arr[1]}</h1>
    //      <h1>{arr[2]}</h1>
    //  </div>

    <div>
    {
    names
    }
    </div>
    )
}

export default List 

//index use as key  when only the list is static other than that issues arises 

//css in js lib 