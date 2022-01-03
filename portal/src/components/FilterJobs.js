import { useContext, useEffect, useState } from "react";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TagContext } from "../DATA/TagContext";


const FilterJobs = () => {
     const [tags,setTags] = useContext(TagContext)
    console.log(tags)
    console.log(tags.Locations)
    const it=()=>{
        var btn2=false;
        console.log("hi")
        btn1?btn2=false:btn2=true
        console.log(btn1)
        setbtn1(btn2)
    }

    const ADD_TAG = (TAG) => {
        console.log(TAG)
        // const check_index = tags.Locations.findIndex(tag => tag === TAG);
        const check_index = tags.Locations.indexOf(TAG);
        console.log('The product', tags.Locations);
        console.log(check_index)
        if (check_index>-1){
            tags.Locations.splice(check_index,1)
            console.log('The product has been removed cart:', tags.Locations);
        }
        else{
            tags.Locations.push(TAG)
            console.log('The product has been added to cart:', tags.Locations);
        }
        console.log(tags)
        setTags(tags)
        setSate(sate+1)
    }
    const [sate,setSate]= useState(0)
    useEffect(()=>{setSate(sate+1)
        console.log(sate)},[tags,tags.Locations])
    const [btn1,setbtn1]=useState(false)
    return ( 
        <div className="filterjobs">
            
            <h3>Filter hobs by</h3>
            <div className="box">
                <p className="blur">Location:</p>
                <Link  to={"/blogs/"+"Hyderabad"} className="tag" onClick={it,()=>{ADD_TAG("Hyderabad")}}  >
                    <IoBookmark className={tags.Locations.indexOf("Hyderabad")>-1 ? "active io-bookmark":"io-bookmark"}></IoBookmark>
                    <h4>Hyderabad</h4>
                </Link>
                <Link  to={"/blogs/"+"Mumbai"} className="tag">
                    <IoBookmark className="io-bookmark"></IoBookmark>
                    <h4>Delhi</h4>
                </Link>
            </div>
            <div className="box">
                <p className="blur">Role</p>
                <div className="tag">
                    <IoBookmark className="io-bookmark"></IoBookmark>
                    <h4>Manager</h4>
                </div>
                <div className="tag">
                    <IoBookmark className="io-bookmark"></IoBookmark>
                    <h4>Product Designer</h4>
                </div>
            </div>
        
        </div>
     );
}
 
export default FilterJobs;