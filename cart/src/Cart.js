import { useContext,useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";


const Cart = () => {

    const [items, setItems] = useContext(GlobalContext)
    let totalamount = 0
    let delivary = 0
    console.log(totalamount,delivary)
    function total(){
        items.map(item =>
            ( 
                totalamount += (item.price*item.qty),
                delivary += (item.qty*item.delivery)
            ))
    }
    useEffect(() =>console.log(totalamount,delivary),
   total()
    ,[items])

    const REMOVEitem=(item)=>{
      const newItems=  items.filter(item1 => item1.name !== item.name)
      setItems(newItems)
    }
    return ( 
        <div className="cart">
            <p>total:{totalamount}</p>
            <p>delivery:{delivary}</p>
            {items.map(item =>(
                <div className="item" key={item.name}>
                    <img src={item.img} alt="" />
                    {console.log(item.img)}
                    <h3>{item.name}</h3>
                    <p className="price">${item.price}</p>
                    <p>{item.qty}</p>
                    <p>total={item.price*item.qty}</p>
                    {item.delivery===0 && <p>Free Delivery!</p>}
                    {item.delivery!==0 && <p>delivery charges ={item.delivery}</p>}
                    <p>{item.description}</p>
                     <button  onClick={()=>{REMOVEitem(item)}} >DELETE</button> 
                </div>
            ))}
        </div>
     );
}
 
export default Cart;