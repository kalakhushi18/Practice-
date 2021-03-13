import React, { Component } from 'react'

const UserContext = React.createContext("kala")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export{UserProvider,UserConsumer}
export default UserContext

//default value in context 
//contexttype 