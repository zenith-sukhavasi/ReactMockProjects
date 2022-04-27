import { useContext,useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";


const Nav = () => {
    const [items, setItems] = useContext(GlobalContext)
    const [scroll,setScroll] = useState(false)
    let [count,setCount] = useState(0)
    console.log(items)
    const total =()=>{
        items.map(item=>
            count+=item.qty)
            console.log(count)
    }
    useEffect(() =>console.log(items),
   total()
    ,[items])
    const onScroll = () => {
        console.log(window.scrollY)
        window.scrollY>60?setScroll(true):setScroll(false)
    }
    window.addEventListener("scroll",onScroll)
    return (
        <nav className={scroll? "nav scroll":" nav not-scroll"}>
            <div className="logo">
                <h1>hi</h1>
            </div>
            <div className="links">
            <Link to="/">STORE</Link >
            <Link to="/Electronics">Electronics</Link >
            <Link to="/HOME">Home Appliances</Link >
            </div>
            <Link to="/cart">  
            <div className="scart">
                    <BsCart4 className="carticon"></BsCart4>
                    <div className="count">
                        <span>{count}</span>
                    </div>
                </div> 
            </Link >
               
       </nav>
    );
}

export default Nav;