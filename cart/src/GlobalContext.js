import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    
    const[items,setitems ] =useState([])

    return ( 
        <GlobalContext.Provider value={[items,setitems ]}>
            {props.children}
        </GlobalContext.Provider>
     );
}
 
