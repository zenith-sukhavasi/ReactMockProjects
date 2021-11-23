import { useContext,useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";


const Nav = () => {
    const [items, setItems] = useContext(GlobalContext)
    let [count,setCount] = useState(0)
    console.log(items)
    const toat =()=>{
        items.map(item=>
            count+=item.qty)
            console.log(count)
    }
    useEffect(() =>console.log(items),
    toat()
    ,[items])
    return (
        <nav className="nav">
            <Link to="/">STORE</Link >
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