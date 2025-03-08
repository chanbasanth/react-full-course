import React , {useEffect, useState} from "react";

const Final = () => { 
    

    const [count, setCount] = useState(0);

    useEffect(() => {
        const currentWidth = window.addEventListener("resize", () => {
            setPageWidth(window.innerWidth);
        })

        return () => {
            console.log("I am removieg..");
            window.removeEventListener("resize", currentWidth);
        }
    });
    
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
   

    return <div>
           <h1>hello useEffect</h1>
           <h1>{count}</h1>
           <h1>{pageWidth}</h1>
           <button onClick={() => {
            setCount(count + 1);
           }}> + </button>
        </div>
}

export default Final;