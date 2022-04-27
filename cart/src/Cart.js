import { useContext, useEffect } from "react";
import { changeQty, onChangeof, REMOVEitem } from "./CartMethods";
import { GlobalContext } from "./GlobalContext";


const Cart = () => {
    // const [flag, setFlag] = useState(0)
    const [items, setItems] = useContext(GlobalContext)
    let totalamount = 0
    let delivary = 0
    let qty = 0
    console.log(totalamount, delivary)
    function total() {
        items.map(item =>
        (
            totalamount += (item.price * item.qty),
            delivary += (item.qty * item.delivery)
        ))
    }
    useEffect(() => console.log(totalamount, delivary),
        total()
        , [items])

    return (
        <div className="cart">
            <p>total:{totalamount}</p>
            <p>delivery:{delivary}</p>
            {items.map(item => (
                <div className="item" key={item.name}>
                    {qty = item.qty}
                    <img src={item.img} alt="" />
                    {console.log(item.img)}
                    <h3>{item.name}</h3>
                    <p className="price">${item.price}</p>
                    <div className="qty">
                        <button onClick={() => changeQty(item, 1,  items, setItems)}>+</button>
                        {/* {flag === 0 ? <input type="text" value={item.qty} onInput={(e) => { onChangeof(item, e.target.value, e, setFlag, items, setItems) }} />
                            : <input type="text" value={""} onInput={(e) => { onChangeof(item, e.target.value, e, setFlag, items, setItems) }} />} */}
                            <input type="text" value={item.qty} onInput={(e) => { onChangeof(item, e.target.value, e, items, setItems) }} />
                        <button onClick={() => changeQty(item, -1,  items, setItems)} disabled={!item.qty >= 1}>-</button>
                        <p>{item.qty}</p>
                    </div>
                    <p>total={item.price * item.qty}</p>
                    {item.delivery === 0 && <p>Free Delivery!</p>}
                    {item.delivery !== 0 && <p>delivery charges ={item.delivery}</p>}
                    <p>{item.description}</p>
                    <button onClick={() => { REMOVEitem(item, items, setItems) }} >DELETE</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;