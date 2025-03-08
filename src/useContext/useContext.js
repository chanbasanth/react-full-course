import React from "react";

export const userContext = React.createContext();

const initialstate = {
    firstName : "Chandu",
    lastName : "Yadav",
    email : "yadav@gmail.com"
}

export const UserContextProvider = ({children}) => {
    
     return <userContext.Provider value = {initialstate}>
        {children}
     </userContext.Provider> 
}
