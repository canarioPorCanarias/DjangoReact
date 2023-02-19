import React, { useState } from 'react'

export default function ManageCart() {
    const [cart, setCart] = useState({})
    useEffect(() => {
        if (localStorage.getItem('cart')) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        } else {
            localStorage.setItem('cart')
        }

    }, [cart])
    function addToCart(item) {
        cart.forEach((value, idx) => {
            if (value.id == item.id) {
                value.amount++;
                return;
            } else {
                setCart([...cart, item])
                return;
            }
        })

    }
    return (
        <div></div>
    )
}
