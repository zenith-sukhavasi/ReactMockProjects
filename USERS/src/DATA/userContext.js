import { useState, createContext } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";



export const UserContext = createContext()

export const UserProvider = (props) => {
    const users = useSelector((state) => state.users.user);
    const userCollectionref = collection(db, "users");
    const addPhoto = async (url) => {
        // const userRef = collection(db, "users", auth.currentUser?.uid, "photoUrl");
        const userRef = doc(db, "users", auth.currentUser?.uid, "photoUrl", 'photourl');
        const docref = doc(db, "users", auth.currentUser?.uid);
        // const colref = collection(docref, 'subcollection');
        // await addDoc(colref, nyUdstyr);
        await setDoc(docref, { photoUrl: url }, { merge: true });
        // await addDoc(userRef, 'phot');
        console.log("photo url", url);
    };
    const getUserInfo = async (uid) => {
        const docref = doc(db, "users", uid);
        const dataref = await getDoc(docref);
        // console.log("user",dataref.data())
        const data = dataref.data()
        // console.log("user data",data)
        return data;
    }
    const getTime = (stamp) => {
        let date = new Date(parseInt((stamp.seconds.toString() + (stamp.nanoseconds.toString() ).substring(0,3))));
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let month = months[date.getMonth()];


        let diff = ((new Date()).getTime() - date.getTime()) / 1000
        let day_diff = Math.floor(diff / 86400);
        console.log("diff", new Date().getTime(), day_diff, diff)
        let result = 0
       if( day_diff == 0 ) {
           if( diff < 60) {result ="just now" }
          else if ( diff < 120 ) {result ="1 minute ago" }
          else if (  diff < 3600 ) {result =Math.floor(diff / 60) + " minutes ago" }
          else if (  diff < 7200 ) {result ="1 hour ago" }
          else if (  diff < 86400 ) {result =Math.floor(diff / 3600) + " hours ago"}
       }
          else if ( day_diff == 1) {result = "Yesterday" }
          else if (  day_diff < 7 ) {result =day_diff + " days ago" }
          else if ( day_diff < 31 ) {result =Math.ceil(day_diff / 7) + " weeks ago"}

        return result
    }
    const getDateAgo = (stamp) => {
        let diff = (((new Date()).getTime() - stamp) / 1000)
        let day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
            return;

        if (day_diff == 0) {
            if (diff < 86400) { return Math.floor(diff / 3600) + " hours ago" }
            else if (diff < 7200) { return "1 hour ago" }

            else if (diff < 3600) { return (Math.floor(diff / 60) + " minutes ago") }

            else if (diff < 120) { return "1 minute ago" }

            else if (diff < 60) { return "just now" }

        }
        if (day_diff == 1) { return "Yesterday" }
        else if (day_diff < 7) { return day_diff + " days ago" }
        else if (day_diff < 31) { return Math.ceil(day_diff / 7) + " weeks ago" }
    }
    const [user, setUser] = useState({
        Firstname: "zenith",
        Lastname: "Sukhavasi",
        Email: "sukhavasi@gmail.com",
        Mobile: 9133677038,
        picture: "..\src\Images\images.jpeg"

    })

    return (
        <UserContext.Provider value={{ user, setUser, addPhoto, getUserInfo, getTime }}>
            {props.children}
        </UserContext.Provider>
    );
}