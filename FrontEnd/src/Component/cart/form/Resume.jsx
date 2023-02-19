import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext/CartContext'
import { useMoralisWeb3Api } from "react-moralis";

export default function Resume({ form, RegaloText }) {
    var { getTotalPrice } = useContext(CartContext)

    const [priceEth, setpriceEth] = useState(0)
    const Web3Api = useMoralisWeb3Api();


    const fetchTokenPrice = async () => {
        //Get token price on PancakeSwap v2 BSC
        const options = {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",

        };
        const price = await Web3Api.token.getTokenPrice(options);
        setpriceEth((getTotalPrice() / price.usdPrice).toFixed(6))
       
    };
    useEffect(() => {
        if (!priceEth) {
            fetchTokenPrice()
        }
    }, [])
    return (
        <div>
            <div className="container">
                <div className="col">
                    <div className="row border-bottom border-secondary mb-4 mt-2">
                        <h5>Direccion De envio</h5>
                        <div className="">
                            {form.Nombre} {form.Apellidos}
                        </div>
                        <div className="">
                            {form.Calle} {form.Codigo} {form.Poblacion} {form.Provincia} {form.pais}
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary mb-4">
                        <h5>Direccion De Facturacion</h5>
                        <div className="">
                            {form.Nombre} {form.Apellidos}
                        </div>
                        <div className="">
                            {form.Calle} {form.Codigo}  {form.Poblacion} {form.Provincia} {form.pais}
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary mb-4">
                        <h5>Metodo de pago</h5>
                        <div className="">
                            <div className="">Moneda de pago: ETH <img src={require('../../../assets/image/eth.png')} className="mb-4" height={20} width={20} alt="" /></div>
                            <div className="">Euros: {getTotalPrice()}$</div>
                            <div className="">Eth: {priceEth} <img src={require('../../../assets/image/eth.png')} className="mb-4" height={20} width={20} alt="" /></div>
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary mb-4">
                        <h5>Opcion de regalo</h5>
                        <div className="">
                            <span className='d-block'>texto:</span>
                            <textarea disabled style={{ 'resize': 'none' }}  value={RegaloText}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
