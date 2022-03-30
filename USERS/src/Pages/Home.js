import { addDoc, collection, getDocs,deleteDoc ,doc, query, where, endAt, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ImUpload from "../Components/ImUpload";
import Post from "../Components/Post";
import { db, auth } from "../FirebaseConfig";



const Home = () => {
    const postCollectionref = collection(db, 'posts')
    const user = useSelector((state) => state.users.user)
    console.log("state user", user)
    const [post, setPost] = useState('')
    const [postLists, setPostList] = useState([]);
    const handlePost = () => {
        if (auth.currentUser) {
            addPost()
        }
        else {
            console.log('user not logged in')
        }
    }
    auth.onAuthStateChanged(user => {
        if(user)
        console.log(user)
        else{
          console.log("sign out",user)
        //   window.location.reload(false)
          return  <Navigate to="/"/>;
        }
        
      })
    // const q = query(postCollectionref, where("post", "==", 'am'),limit(3),);
    // const q2 = query(postCollectionref, where("author.id", "==", auth.currentUser.uid),);

    const getPosts = async () => {
      // const data = await getDocs(q2);
        const data = await getDocs(postCollectionref);
        console.log(data);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
    const addPost = async () => {
        await addDoc(postCollectionref,
            {post: post,
            author:{name: auth.currentUser.displayName ,id: auth.currentUser.uid}})
            getPosts()
    }
    
      const deletePost = async (id) => {
          console.log(id)
          // if(auth.currentUser.uid!= id){
          //     return
          // }
          console.log("deleted")
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        getPosts()
      };  
    
    useEffect(() => {
        console.log('re render')
     
        getPosts();
      }, []);
       
    return (<div className="home">
      <ImUpload></ImUpload>
      <h1>{user.displayName?user.displayName:null}</h1>
      {auth.currentUser&& <h1>{auth.currentUser.displayName}</h1>}
        <input type="text" onChange={(e) => setPost(e.target.value)} />
        <button onClick={handlePost}>post</button>
        <button onClick={getPosts}>refresh</button>
        <div className="posts">
            {postLists.map((post) =>(
                <div className="post" key={post.id}>
                     {/* <p>{post.post}</p>  */}
                     <Post post={post} deletePost={deletePost}></Post>
                </div>
            ))}
        </div>
    </div>);
}

export default Home;