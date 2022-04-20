import { useState, createContext } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";



export const UserContext = createContext()

export const UserProvider = (props) => {
    const users = useSelector((state) => state.users.user);
    const userCollectionref = collection(db, "users");
    const addPhoto = async (url) => {
       // const userRef = collection(db, "users", auth.currentUser?.uid, "photoUrl");
       const userRef = doc(db, "users", auth.currentUser?.uid, "photoUrl",'photourl');
        const docref = doc(db, "users", auth.currentUser?.uid);
        // const colref = collection(docref, 'subcollection');
        // await addDoc(colref, nyUdstyr);
        await setDoc(docref, { photoUrl: url },{merge:true});
       // await addDoc(userRef, 'phot');
        console.log("photo url", url);
    };
    const [user, setUser] = useState({
        Firstname: "zenith",
        Lastname: "Sukhavasi",
        Email: "sukhavasi@gmail.com",
        Mobile: 9133677038,
        picture: "..\src\Images\images.jpeg"

    })

    return (
        <UserContext.Provider value={{ user, setUser, addPhoto }}>
            {props.children}
        </UserContext.Provider>
    );
}