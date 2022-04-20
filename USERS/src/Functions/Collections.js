import { collection, doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { auth, db } from "../FirebaseConfig";

const Collection = () => {
  const userCollectionref = collection(db, "users");
  const user = useSelector((state) => state.users.user);
  const addPhoto = async () => {
    const userRef = doc(db, "users", auth.currentUser?.uid);
    await setDoc(userRef, { photoUrl: user.photoUrl });
    console.log("photo url", user.photoUrl);
  };
  return <></>;
};

export default Collection;

// const userCollectionref = collection(db, 'users')
// const user = useSelector((state) => state.users.user)
// export const addPhoto = async () => {
//     const userRef = doc(db, 'users', auth.currentUser?.uid);
//     await setDoc(userRef, { photoUrl:user.photoUrl })
//     console.log('photo url',user.photoUrl)
//   }
