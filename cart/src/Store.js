import { useEffect, useContext } from "react"
import ADDitem from "./ADDitem"
// import ADDitems from "./ADDitems"
import items from "./DATA"
import { GlobalContext } from "./GlobalContext"


const Store = () => {

    const [Cartitems, setitems] = useContext(GlobalContext)
    // console.log(items[0])
    console.log(Cartitems)
    useEffect(() => {
        console.log("ran")
    })
    // const ADDitem = (item) => {
    //     useADDitem(item)
    // }


    return (
        <div className="store">
            <div className="list">
            {items.map(item => (
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
        </div>
    );
}

export default Store;
