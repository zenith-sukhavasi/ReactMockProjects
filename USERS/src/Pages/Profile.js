import { Card, CardContent } from "@mui/material";
import  Paper  from "@mui/material/Paper";
import { padding } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../DATA/userContext";
import { auth } from "../FirebaseConfig";
import images from "../Images/images.jpeg";





const Profile = () => {
    const[user,setUser]=useContext(UserContext)
    console.log(user)
    return (  
        <div className="profile">
            <Paper elevation={3} sx={{padding:2}} >
             <img src="/src/Images/images.jpeg" alt="" />
             <img src={auth.currentUser.photoURL} alt="" />
             <img src={images} alt="" />
             <h1>{user.Firstname}</h1>
            {auth.currentUser.displayName&&(<h1>{auth.currentUser.displayName}</h1>)}
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
 
export default Profile;