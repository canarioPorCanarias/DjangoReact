import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {


    const [cartItems, setCartItems] = useState([])


    const loadCartLocal = () => {
        setCartItems(JSON.parse(localStorage.getItem('cart')))
    }


    useEffect(() => {
        var cart = localStorage.getItem('cart');
        if (cart) {
            loadCartLocal()
        }

    }, [])


    useEffect(() => {
        if (cartItems.length >= 1) {
            localStorage.setItem('cart', JSON.stringify(cartItems))

        }
    }, [cartItems])


    const getTotalPrice = () => {
        var total = 0;
        cartItems.forEach(val => {
            total += val.price * val.qty;
        })
        return total
    }

    const onAdd = (product, cantidad) => {

        loadCartLocal()
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );

        } else {
            setCartItems([...cartItems, { ...product, qty: cantidad }]);

        }
        localStorage.setItem('cart', JSON.stringify(cartItems))


    };


    const onRemove = (product) => {
        loadCartLocal()

        var exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            // setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
    };


    const removeFromCart = (product) => {
        loadCartLocal()
        setCartItems(cartItems.filter((x) => x.id !== product.id));
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const clearCart = ()=>{
        setCartItems([]);
        localStorage.setItem('cart','[]')
    }
    return (

        <CartContext.Provider value={{
            onAdd,
            onRemove,
            cartItems,
            removeFromCart,
            getTotalPrice,
            clearCart
        }}>

            {children}

        </CartContext.Provider>
    )
}