import React, {useState} from "react";

const Index = () =>{


    const [data, setData] = useState(false);

    const changeContent = () => {
        setData(!data);
    }

    return(

        <div className = "container">
            <button onClick={changeContent}>{data ? "Hide" : "Show"}</button>
            {data && <p style = {{width:"500px", textAlign : "center"}}>Hello, I am Chanbasanth from Vikarabad distic, I completed my B.Tech in computer science at Tkr College, I want to
             learn react js and I want to know how it's working how the industry peoples are using this react js.</p>}
        </div>
    )
}

export default Index;