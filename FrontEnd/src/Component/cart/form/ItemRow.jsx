import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'

export default function ItemRow({ product }) {
    const { onAdd, onRemove, removeFromCart } = useContext(CartContext)
    const [cantidad, setcantidad] = useState(product.qty)
    const [Total, setTotal] = useState(0)

    const handleChange = (e) => {
        if (e.target.value > 0 && e.target.value < 100) {
            setcantidad(e.target.value)
            onAdd(product)
        } else {
            if (e.target.value > 100) {
                setcantidad(99)
            } else if (e.target.value < 0) {
                setcantidad(1)
            }
        }
    }
    const handlesub = (e) => {
        if (cantidad > 1) {
            setcantidad(Number(cantidad) - 1)
            onRemove(product)
        }
    }
    const handleAdd = (e) => {
        if (cantidad !== 100) {
            setcantidad(+cantidad + +'1')
            onAdd(product)
        }


    }
    useEffect(() => {
        setTotal(cantidad * product.price)

    }, [cantidad])
    const handleRemoveCart = () => {
        removeFromCart(product)
    }
    return (
        <tr>
            <td style={{ width: '400px' }}>
                <div className="row">
                    <div className="col-sm-4 ">
                        <img src={product.img} height={106} width={106} alt="" />

                    </div>
                    <div className="col">
                        <p className='d-inline w-50 text-wrap h-100'>{product.name}</p>

                    </div>
                </div>

            </td>

            <td>Precio: {product.price} €</td>
            <td>
                <input type="button" onClick={handlesub} className='d-inline btn btn-secondary px-2 py-1 mx-1' value="-" />
                <input type="text" onChange={handleChange} value={cantidad} className='input-group-text d-inline p-1' size={1} />
                <input type="button" onClick={handleAdd} className='d-inline btn btn-secondary px-2 py-1 mx-1' value="+" />
            </td>
            <td>Total: {Total} €</td>
            <td><i className="fas fa-times p-2" onClick={handleRemoveCart}></i></td>
        </tr>

    )

}
