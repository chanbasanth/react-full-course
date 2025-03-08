import React, { useState, useEffect } from "react";
import "./useEffect.css";

const Index = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const [drinksData, setDrinksData] = useState([]);  
    const [userDta, setUserData] = useState("");
    const [loading, setLoading] = useState(true);
    const [isError, setisError] = useState({status : true, msg : ""})



    const fetchUserData = async (urlApi) => {
        setLoading(true)
        setisError({status:false, msg : ""})
        try {
            const response = await fetch(urlApi);
            const {drinks} = await response.json();
            setDrinksData(drinks);
            setLoading(false)
            setisError({status:false, msg : ""})
            
            if(!drinks) {
                throw new Error("Data not Found"); 
            }  

        } catch(error) {
            setLoading(false)
            setisError({status:true, msg : error.message || "somthing went erong"})
        }
    };
    
    useEffect(() => {
        if (userDta === "") { 
            const currentUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l";
            fetchUserData(currentUrl);
        } else {
            const currentUrl = `${url}${userDta}`  
            fetchUserData(currentUrl);
        }

    }, [userDta]);

    return (
        <div>
            <h1>Hello, React</h1>
            <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Search for a drink..."
                value={userDta}
                onChange={(e) => setUserData(e.target.value)}
            />
            <hr/>
            {loading && !isError?.status && <h1>Loading...</h1>}
            {isError?.status  && <h1>{isError.msg}</h1>}
            { !loading && !isError?.status && <ul className="cocktail-data">
                {drinksData.map((eachObj) => {
                    const { idDrink, strDrinkThumb, strDrink } = eachObj;
                    return (
                        <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink} />
                                </div>
                                <div>{strDrink}</div>
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};

export default Index;
