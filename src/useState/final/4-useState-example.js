
import React, { useState } from "react";
import "./4-useState.css";


const Index = () => {

    const[firstName, setFirstName] = useState("");
    const[email, setEmail] = useState("");
    const[password , setPassword] = useState("");
    
    // const changeFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    // const changePassword = (e) => {
    //     setPassword(e.target.value);
    // }

    // const changeInputValue = (e, name) => {
    //     if(name === "firstName"){
    //         setFirstName(e.target.value);
    //     }else if(name === "email"){
    //         setEmail(e.target.value);
    //     }else if (name === "password"){
    //         setPassword(e.target.value);
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName : firstName,
            email : email,
            password : password
        }

        console.log(obj);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>User Form</h1>
               
                <div className = "vv"> <input
                type = "text"
                name = "firstName"
                id = "firstName"
                placeholder = "Enter you name :)"
                value = {firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                </div>

                <div className = "vv"><input
                type = "text"
                name = "email"
                id = "email"
                placeholder = "Enter your password"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                
                /></div>

                <div className = "vv"><input
                type = "text" 
                name = "password" 
                id = "password" 
                placeholder="Enter your Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                /></div>

                <button >Submit</button>

            </form>
        </div>
    )
}

export default Index;