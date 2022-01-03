import {useState, createContext } from "react";
import FilterJobs from "../components/FilterJobs";


export const TagContext=createContext()

export const TagProvider =(props) =>{
    const [tags,setTags]=
    useState({Locations:[ "Hyderabad" ,"Delhi","Chennai","Mumbai"] ,
    Roles:[ "Manager","Developer","Product Designer","Sales"]})

    return(
       <TagContext.Provider  value={[tags,setTags]}>
           <div>
            {/* <FilterJobs></FilterJobs> */}
           {props.children}
          </div>
           </TagContext.Provider>
    )
}