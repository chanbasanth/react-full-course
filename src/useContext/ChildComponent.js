import React, { useContext } from "react";
import SubChildComponent from "./SubChildComponent";
import { CreateUserContext } from "./useContex_1";

const ChildComponent = () => {

    const userValues = useContext(CreateUserContext);

    
    return<div>
         <h1>ChildComponent</h1>
        <ul>
            {userValues.map((each) => {
                const {name , age, address, Gender, id} = each ;
                return <li key = {id}>
                    <p>Name : {name}</p>
                    <p>Age : {age}</p>
                    <p>Address : {address}</p>
                    <p>Gender : {Gender}</p>
                </li>
            })}
        </ul>
        <SubChildComponent/>
    </div>
}

export default ChildComponent;