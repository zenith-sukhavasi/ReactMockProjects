import items from "./DATA"
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext"
import ADDitem from "./ADDitem"

const ItemList = ({cat}) => {
    console.log(cat)
    const [Cartitems, setitems] = useContext(GlobalContext)
    const Citems = items.filter(item => item.category === cat)
    return ( 
        <div className="list">
             {Citems.map(item => (
                <div className="item" key={item.name}>
                    <img src={item.img} alt="" />
                    {console.log(item.img)}
                    <h3>{item.name}</h3>
                    <p className="price">${item.price}</p>
                    {item.delivery === 0 && <p>Free Delivery!</p>}
                    <p>{item.description}</p>
                    <button value={item} onClick={() => { ADDitem(item, Cartitems, setitems) }} >BUY</button>
                    {/* <button value={item} onClick={() => <ADDitems item={item}></ADDitems>} >BUY</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default ItemList;