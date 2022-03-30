import {  signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { addUser } from "../Redux/slices/Users";



const Login = () => {
  const Dispatch = useDispatch()
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      console.log(auth.currentUser.displayName)
      console.log(auth.currentUser)
      console.log(auth)
      localStorage.setItem("isAuth", true);
      // Dispatch(addUser(auth.currentUser))
       Dispatch(addUser({...auth.currentUser}))
    } catch (error) {
      console.log(error.message);
    }
  };
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    return ( <div className="login">

<div>
        <h3> Login </h3>
        <input type="email"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
         <button onClick={login}> Login</button>
        </div>
        <div>
        <Link to="/Signup">Signup</Link>
        </div>
        {auth.currentUser&&auth.currentUser.displayName}
        </div> );
}
 
export default Login;