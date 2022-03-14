import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../FirebaseConfig";

const Signup = () => {

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
         await updateProfile(auth.currentUser, { displayName: userName }).catch(
            (err) => console.log(err)
          );
          console.log(user);
          console.log(auth.currentUser.displayName)
          console.log(auth.currentUser)
          console.log(auth)
          localStorage.setItem("isAuth", true);
        }
        
        catch (error) {
          console.log(error.message);
        }
      };
      const [userName, setUserName] = useState("");
        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");

    return ( <div className="signup">
        <div>
           <h3> Register User </h3>
           <input
        type='text'
          placeholder="Name"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
        type='email'
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
        type='password'
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
         <button onClick={register}> Create User</button>
        </div>
    </div> );
}
 
export default Signup;