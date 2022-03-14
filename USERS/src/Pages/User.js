import { Card, CardContent } from "@mui/material";
import  Paper  from "@mui/material/Paper";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../DATA/userContext";






const User = () => {
    const{uid }=useParams()
    console.log(uid)
    const[user,setUser]=useContext(UserContext)
    console.log(user)
    return (  
        <div className="user">
            <Paper elevation={3} sx={{padding:2}} >
             <img src="/src/Images/images.jpeg" alt="" />
             <img src={user.Profile} alt="" />
             <h1>{uid}</h1>
             <h1>{user.Firstname}</h1>
            <h1>hi</h1>
            </Paper>
            <Card elevation={3} sx={{marginTop:2, }}>
             <CardContent>
             <img src="/src/Images/images.jpeg" alt="" />
             <img src={user.Profile} alt="" />
             <h1>{user.Firstname}</h1>
            <h1>hi</h1>
            </CardContent>
            </Card>
        </div>
    );
}
 
export default User;