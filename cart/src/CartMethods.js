
export const REMOVEitem = (item, items, setItems) => {
    console.log("triggered", item)
    item.qty = 0
    const newItems = items.filter(item1 => item1.name !== item.name)
    console.log(newItems)
    setItems([...newItems])
    console.log(items)
}
export const onChangeof = (item, I, e,  items, setItems) => {
    const check_index = items.findIndex(cartitem => cartitem.name === item.name)
    var x = Number(e.nativeEvent.data)
    if (isNaN(x)) {
        return false
    }
    else {
        items[check_index].qty = Number(I)
    }
    if (e.nativeEvent.inputType === "deleteContentBackward") {
        // setFlag(1)
        //    console.log("back",flag)
    }
    // else {
    //     setFlag(0)
    // }
    if (e.nativeEvent.inputType === "deleteContentBackward") {
        if (items[check_index].qty > 0) {
            // setFlag(0)
            // console.log("back",flag)
        }
    }
    setItems([...items])
}
export const changeQty = (item, I,  items, setItems) => {
    //  return false

    const check_index = items.findIndex(cartitem => cartitem.name === item.name)
    //  I?items[check_index].qty+1:items[check_index].qty-1
    console.log("called", I)
    console.log(typeof I)
    if (I === 1) {
        if (items[check_index].qty === 0) {
            // setFlag(0)
        }
        items[check_index].qty++  //+1 giving  Expected an assignment or function call and instead saw an expression  error
    }
    else if (I === -1) {
        items[check_index].qty--
        console.log(items[check_index].qty, "is")
    }

    if (items[check_index].qty === 0) {
        // console.log("triggered2", item)
        // REMOVEitem(item)
    }
    console.log(items)
    setItems([...items])
    return items
}