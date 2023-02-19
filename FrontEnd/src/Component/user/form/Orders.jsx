import React, { useEffect, useState } from 'react'
import api from '../../../config.json';
import axios from 'axios';
import { useMoralis } from 'react-moralis'
import swal from 'sweetalert2';

export default function Orders() {
    const [orders, setorders] = useState(false)
    var { account } = useMoralis();
    useEffect(() => {
        axios.put(api.API_URL + 'orders', { 'ethAddr': account }).then((res, err) => {
            if (!err) {
                setorders(res.data)
            }
        })


    }, [])
    const handleCancel = (order) => {
        swal.fire({
            title: "Cancelar pedido",
            text: "estas seguro de que quieres cancelarlo",
            icon: "question",
            confirmButtonText: "Si, Cancelar",
            showCancelButton: true,
            cancelButtonText: "No"

        }).then(val => {
            if (val.isConfirmed) {
                axios.patch(api.API_URL + 'orders', { id: order.id }).then((res, err) => {
                    swal.fire("Cancelado", "Pedido Cancelado", "success");
                }).catch(err => {
                    swal.fire('error', 'ha pasado algo inprevisto', 'error')
                })
            }
        })

    }

    return (
        <div>
            <div className="">
                <h3 className='text-center mt-2'>Pedidos</h3>
            </div>
            <div className="">
                {orders.length >= 1 ?
                    (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">cart</th>
                                    <th scope="col">status</th>
                                    <th scope="col">price</th>
                                    <th scope="col">hash</th>
                                    <th scope='col'>action</th>
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
                                        <td><button className='btn btn-danger' onClick={() => [handleCancel(val)]}>Cancel</button></td>
                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    ) :
                    (
                        <div className="">
                            <h3 className='text-center mt-5 underline'><ins> No tienes pedidos aqui</ins></h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
