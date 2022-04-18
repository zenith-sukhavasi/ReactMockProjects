import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, storage } from "../FirebaseConfig";
import { modifyUser } from "../Redux/slices/Users";


const ImUpload = () => {
    const [file, setFile] = useState()
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const baseRef = ref(storage, 'Images')
    const dispatch = useDispatch()
    function validateFileType(fileName){
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
            //TO DO
            return true;
        }else{
            alert("Only jpg/jpeg and png files are allowed!");
        } }
    const handleChange = async (e) => {
        if(validateFileType(e.target.files[0].name)){
        await setFile(e.target.files[0])
       
       
        console.log("image:", e.target.value)
        console.log("image actual:", e.target.files[0])
        console.log("image Name:", e.target.files[0].name)}
        // const uploadTask = uploadBytes(storageRef, file);
        
      
        // uploadBytes(storageRef, file).then((snapshot) => {
        //     const progress = Math.round(
        //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //     );
        //     setProgress(progress);
        //     console.log(progress)
        //       },
        //     error => {
        //         console.log(error);
        //         },
        //     () => { console.log("hi")
        //         storageRef
        //             .getDownloadURL()
        //             .then(url => {
        //                 setUrl(url);
        //                 console.log(url)
        //                 console.log("done")
        //             });
        //         console.log("done")
        //     }
        // )
    }

    const handleClick =async(e)=>{ 
        const storageRef = ref(baseRef,  auth.currentUser.uid+'/'+'profile/'+file.name)
        console.log(storageRef)
       
       
        // const uploadTask = uploadBytes(storageRef, file);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
              console.log(progress)
            },
            error => {
                console.log(error);
                },
            () => { console.log("hi")
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setUrl(url);
                        console.log(url)
                        console.log("done")
                        dispatch(modifyUser({photoURL:url}))
                    });
                console.log("done")
            }
        )
    }
 
  
    console.log(baseRef)
    console.log(progress)
    console.log(url)
    // uploadBytes(baseRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //   });
    return (
        <>
            <input type="file" onChange={handleChange} accept='image/*'/>
            <button onClick={handleClick}>upload</button>
        </>
    );
}

export default ImUpload;