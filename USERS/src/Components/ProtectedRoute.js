import { Navigate, useParams } from "react-router-dom";
import { auth } from "../FirebaseConfig";





const ProtectedRoute = (props) => {
    const{uid }=useParams()
    console.log(uid)
    console.log(auth.currentUser)
    const user=props.user;
    if(! auth.currentUser && uid ===undefined) {
        // navigate("/");
        console.log("undef")
        return  <Navigate to="/"   />;
    }
    if(auth.currentUser&&auth.currentUser.uid==uid) {
        return  <Navigate to="/profile"   />;
    }
    return ( 
        props.children
     );
}
 
export default ProtectedRoute;