import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import theme1 from "./Styles/Styles";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Profile from "./Pages/Profile";
import { UserProvider } from "./DATA/userContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { auth } from "./FirebaseConfig";
import User from "./Pages/User";
import { useDispatch } from "react-redux";
import { addUser,deleteUser } from "./Redux/slices/Users";



function App() {
  const Dispatch = useDispatch()
  auth.onAuthStateChanged(user => {
    if(user){
    console.log("user",user)
    console.log("user",{...auth.currentUser})
    Dispatch(addUser({...auth.currentUser}))
    }
    else{
      console.log(user)
      Dispatch(deleteUser())
      return  <Navigate to="/"   />;
    }
    
  }) 
  useEffect(() => {if(auth.currentUser){
    console.log("user",{...auth.currentUser})
    Dispatch(addUser({...auth.currentUser}))
  }},[])
  const [login, setLogin] = useState(true)
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <ThemeProvider theme={theme1}>
            <Navbar></Navbar>
            {/* <div className="routes"> */}
            <Container className="routes" >
              <Routes>
                <Route path="/profile" element={<ProtectedRoute user={login}>
                  <Profile></Profile>
                </ProtectedRoute>} />
                <Route path="/Users/:uid" element={<ProtectedRoute user={login}>
                  <User/></ProtectedRoute>}></Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
              </Routes>
            </Container>
            {/* </div> */}
          </ThemeProvider>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
