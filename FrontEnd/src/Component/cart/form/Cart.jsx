import React, { useContext, useEffect, useState } from 'react'
import ItemRow from './ItemRow'
import { CartContext } from '../../Context/CartContext/CartContext';

export default function Cart({ nextStep }) {

    const [cart, setcart] = useState([])
    const [FinalPrice, setFinalPrice] = useState(0)
    const { getTotalPrice } = useContext(CartContext)

    useEffect(() => {
        setcart(JSON.parse(localStorage.getItem('cart')))

    }, [])
    return (

        <div className="row">
            <div className="col-sm-8">
                <h4>Articulos</h4>
                <table className="table">
                    <thead className='table-secondary text-uppercase'>
                        <tr>
                            <th scope="col">articulo</th>
                            <th scope="col">precio</th>
                            <th scope="col">unidades</th>
                            <th scope="col">total</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((val, idx) => (
                            <ItemRow product={val} key={idx} final={{ FinalPrice, setFinalPrice }}></ItemRow>
                        ))}

                    </tbody>
                </table>

            </div>
            <div className="col-sm mt-2">
                <div className=" border p-2">
                    <p>Dale a realizar pedido para terminal la compra</p>
                    <input className="form-check-input ms-2 mt-1 " type="checkbox" value="" />
                    <div className="d-inline ms-3">Pedido Rapido +20$</div>
                    <hr />
                    <div className="text-uppercase">total: {getTotalPrice()} $</div>
                </div>
                <button className='btn btn-warning w-100 mt-2' onClick={nextStep}>Proceder a comprar</button>

            </div>
        </div>

    )

}
