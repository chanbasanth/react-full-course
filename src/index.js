 
import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import {UserContextProvider } from "./useContext/useContext";
import {CreateUserExposeData} from "./useContext/useContex_1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<CreateUserExposeData>
<UserContextProvider>
    <App/>
</UserContextProvider>
</CreateUserExposeData>
);
