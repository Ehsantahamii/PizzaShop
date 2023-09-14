const Reducer = (cart = [], action) => {
    if (action.type === "ADD") {
        let tempCart = cart.filter((item) => item.id === action.payload.id);
        if (tempCart.length < 1) {
            alert("به سبد خرید اضافه شد");
            return [...cart, action.payload];
        } else {
            // alert("قبلا به سبد خرید اضافه شده است!");
            return cart;
        }
    }

    if (action.type === "REMOVE") {
        return cart.filter((item) => item.id !== action.payload.id);
    }

    if (action.type === "INCREASE") {
        let tempCart = cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        })
        return tempCart;

    }
    if (action.type === "DECREASE") {
        let tempCart = cart.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        })
        return tempCart;

    }
    return cart;
}

export default Reducer;