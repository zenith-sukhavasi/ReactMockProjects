


// console.log(items[0])

const ADDitem = (item, Cartitems, setitems) => {


    //    console.log(item)
    const check_index = Cartitems.findIndex(cartitem => cartitem.name === item.name);
    // console.log(item.name)
    // console.log(check_index)
    if (check_index !== -1) {
        Cartitems[check_index].qty++;
        setitems([...Cartitems])
        console.log("Quantity updated:", Cartitems);
    }
    else {
        item.qty++
        // Cartitems.push(item);
        setitems([...Cartitems, item])
        console.log('The product has been added to cart:', Cartitems);
    }

    //    setitems([...Cartitems,item])
    return
}

export default ADDitem