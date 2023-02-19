import React, { useEffect, useState } from 'react'
import api from '../../../config.json'
import axios from 'axios'
import { useMoralis } from 'react-moralis'
export default function Historyreturns() {
    const [orders, setorders] = useState([]);
    var { account } = useMoralis();
    useEffect(() => {
        axios.patch(api.API_URL + 'history', { ethAddr: account }).then((res, err) => {
            setorders(res.data);
        })
    }, [])

    return (
        <div>
            <div className=""><h3 className='text-center mt-2'>Historial de compras</h3></div>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">precio</th>
                            <th scope="col">fecha</th>
                            <th scope="col">hash</th>
                            <th scope='col'>Numero de pedido</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((val, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{val.price}</td>
                                <td>{val.date}</td>
                                <td><a target={'_blank'} className='text-info' style={{ 'textDecoration': 'none' }} href={"https://ropsten.etherscan.io/tx/" + val.hash}>{val.hash.slice(0, 15)}</a></td>
                                <td>{val.order_id}</td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
        </div>
    )
}
