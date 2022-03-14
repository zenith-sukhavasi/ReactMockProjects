import {useState, createContext } from "react";

export const UserContext=createContext()

export const UserProvider = (props) => {
    const[user,setUser]=useState({
        Firstname: "zenith",
        Lastname: "Sukhavasi",
        Email: "sukhavasi@gmail.com",
        Mobile: 9133677038,
        picture: "..\src\Images\images.jpeg"

    })

    return ( 
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
     );
}