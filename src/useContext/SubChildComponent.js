
import { useContext } from "react";
import { userContext } from "./useContext";


const SubChildComponent = () => {

    const data = useContext(userContext);
    
    const {firstName, lastName, email} = data;

    return <div>
        <h1>SubChild Component</h1>
        <p>FirstName : {firstName}</p>
        <p>LastName : {lastName}</p>
        <p>Gmail : {email}</p> 
    </div>
}
export default SubChildComponent;