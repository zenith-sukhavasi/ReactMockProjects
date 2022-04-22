import { Card, CardContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../DATA/userContext";
import { db } from "../FirebaseConfig";

const User = () => {
  const { uid } = useParams();
  const [postLists, setPostList] = useState([]);
  const userRef = doc(db, "users", uid);
  const userCollectionref = collection(db, 'users')//.doc(uid)
   const q1 = query(userCollectionref, where("_name_", "==", uid),);
  const getUser = async () => {
    // const data = await getDocs(q2);
    console.log("user", userRef);
    const data = await getDoc(doc(userCollectionref,uid));
    console.log("user data:", data);
    console.log("user data:", data.data());
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(uid);
  const {user, setUser} = useContext(UserContext);
  console.log(user);
  return (
    <div className="user">
      <Paper elevation={3} sx={{ padding: 2 }}>
        <img src="/src/Images/images.jpeg" alt="" />
        <img src={user.Profile} alt="" />
        <h1>{uid}</h1>
        <h1>{user.Firstname}</h1>
        <h1>hi</h1>
      </Paper>
      <Card elevation={3} sx={{ marginTop: 2 }}>
        <CardContent>
          <img src="/src/Images/images.jpeg" alt="" />
          <img src={user.Profile} alt="" />
          <h1>{user.Firstname}</h1>
          <h1>hi</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
