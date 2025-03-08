import React, {useState, useEffect} from "react";

const Final = () => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({status : false, msg : ""});


    const url = "https://jsonplaceholder.typicode.com/users";
    
    const fetchUserData = async (apiurl) => {
        setLoading(true);
        setIsError({status : false, msg : ""});
        try{   
        const response = await fetch(apiurl);
        const data = await response.json();
        setUserData(data);
        setLoading(false);  
        setIsError({status : false, msg : ""});
        if(response.status === 404){
            throw new Error("The Data is not Found.");
        }
        }catch(error){
         setLoading(false);
         console.log(error.message);
         setIsError({status : true, msg : error.message || "somthing went wrong please wait somtime."});
        }
    }

    useEffect(() => {
        fetchUserData(url);
    }, []);

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(isError.status){
        return <div>
            <h1 style = {{color : "red"}}>{isError.msg}</h1>
        </div>
    }

    return (
        <div> 
            <ul>
                <h1>Hello, User</h1>
            {
            userData.map((eacgObj) => {
            const {name, email, id} = eacgObj;
            return(
            <li 
            key = {id}>
                <div>{name}</div>
                <div>{email}</div>
            </li>)
            })
            }
            </ul>
        </div>
    )
}

export default Final;