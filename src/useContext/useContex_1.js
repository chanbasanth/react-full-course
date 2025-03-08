import React, { createContext } from "react";

export const CreateUserContext = React.createContext();

const dataObj =  [{
    name : "Chanbasanth",
    age : "23",
    address : "Hyderabad, Telangana.",
    Gender : "Male"
    },
    {
    name : "Naveen",
    age : "20",
    address : "Hyderabad, India.",
    Gender : "Male"
    }];
   

export const CreateUserExposeData = ({children}) => {
    return <CreateUserContext.Provider value = {dataObj}>
        {children}
    </CreateUserContext.Provider>
}

export default CreateUserExposeData;