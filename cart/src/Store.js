import { useEffect,useContext,useState } from "react"
import items from "./DATA"
import { GlobalContext } from "./GlobalContext"


const Store = () => {
    
    const[Cartitems,setitems ] =useContext(GlobalContext)
    const[itemnames,setitemnames] = useState([])
    const[itemsamount,setitemnamesamount] = useState(0)
    // console.log(items[0])
    console.log(Cartitems)
    useEffect(() => {
        console.log("ran")
       })
       const ADDitem=(item)=>{
        //    console.log(item)
        const check_index = Cartitems.findIndex(cartitem =>  cartitem.name === item.name);
        // console.log(item.name)
        // console.log(check_index)
        if (check_index !== -1) {
            Cartitems[check_index].qty++;
            setitems([...Cartitems])
            console.log("Quantity updated:", Cartitems);
          } 
          else {
            // Cartitems.push(item);
            setitems([...Cartitems,item])
            console.log('The product has been added to cart:', Cartitems);
          }
      
        //    setitems([...Cartitems,item])
       }

    return ( 
        <div className="store">
            {items.map(item =>(
                <div className="item" key={item.name}>
                    <img src={item.img} alt="" />
                    {console.log(item.img)}
                    <h3>{item.name}</h3>
                    <p className="price">${item.price}</p>
                    {item.delivery!==0 && <p>Free Delivery!</p>}
                    <p>{item.description}</p>
                    <button value={item} onClick={()=>{ADDitem(item)}} >BUY</button>
                </div>
            ))}
        </div>
     );
}
 
export default Store;
