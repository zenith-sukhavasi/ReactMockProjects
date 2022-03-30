import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { auth, storage } from "../FirebaseConfig";

const ImUpload = () => {
    const [file, setFile] = useState()
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const baseRef = ref(storage, 'Images')
    const handleChange = async (e) => {
        await setFile(e.target.files[0])
        const storageRef = ref(baseRef,  auth.currentUser.uid+'/'+file.name)
        console.log(storageRef)
       
        console.log("image:", e.target.value)
        console.log("image actual:", e.target.files[0])
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
                    });
                console.log("done")
            }
        )
      
      
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
  
    console.log(baseRef)
    console.log(progress)
    console.log(url)
    // uploadBytes(baseRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //   });
    return (
        <>
            <input type="file" onChange={handleChange} />
        </>
    );
}

export default ImUpload;