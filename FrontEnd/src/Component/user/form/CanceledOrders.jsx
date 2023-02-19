import React, { useEffect, useState } from 'react'
import api from '../../../config.json'
import axios from 'axios'
import { useMoralis } from 'react-moralis'
export default function CanceledOrders() {
    const [orders, setorders] = useState([]);
    var { account } = useMoralis();
    useEffect(() => {
        axios.post(api.API_URL + 'canceled_orders', { ethAddr: account }).then((res, err) => {
            setorders(res.data);
        })
    }, [])

    return (
        <div>
            <div className=""><h3 className='text-center mt-2'>Pedidos Cancelados</h3></div>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">cart</th>
                            <th scope="col">status</th>
                            <th scope="col">price</th>
                            <th scope="col">hash</th>
                            <th scope='col'>Canceled Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((val, idx) => (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{JSON.parse(val.cart).map(i => (i.name + ", "))}</td>
                                <td>{val.status}</td>
                                <td>{val.price}</td>
                                <td><a target={'_blank'} className='text-info' style={{ 'textDecoration': 'none' }} href={"https://ropsten.etherscan.io/tx/" + val.hash}>{val.hash.slice(0, 15)}</a></td>
                                <td>{val.last_update_date}</td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>
        </div>
    )
}
