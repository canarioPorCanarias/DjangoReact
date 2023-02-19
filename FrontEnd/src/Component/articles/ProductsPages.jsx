import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../Home/NavBar'
import api from '../../config.json'
import LoadingPage from '../LoadingPage/LoadingPage';
import { CartContext } from '../Context/CartContext/CartContext';
import Swal from 'sweetalert2';


export default function ProductsPages() {
    var { onAdd } = useContext(CartContext)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        ,
        showConfirmButton: false,

    })

    const [data, setdata] = useState(false)
    const [cantidad, setcantidad] = useState(1)
    var navigate = useNavigate();
    var { slug } = useParams()
    useEffect(() => {
        axios.post(api.API_URL + 'get_product', { slug_name: slug }).then((res, err) => {
            if (!err) {
                setdata(res.data)
                console.log(res.data)
            }
        })

    }, [slug])
    var formatter = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "EUR"
    });
    const handleChange = (e) => {
        if (e.target.value > 0 && e.target.value < 100) {
            setcantidad(e.target.value)
        } else {
            setcantidad(1)
        }
    }
    const handlesub = (e) => {
        if (cantidad > 1) {
            setcantidad(Number(cantidad) - 1)
        }
    }
    const handleCart = (e) => {
        onAdd(data, cantidad)
        Toast.fire({ icon: "success", title: "<span class='text-dark'>Item added to the cart</span>" })

    }
    const handleBuyClick = () => {
        onAdd(data, cantidad);
        Toast.fire({ icon: "success", title: "<span class='text-dark'>Item added to the cart</span>" })
        navigate('/cart')
    }
    if (!data) {
        return (
            <LoadingPage></LoadingPage>
        )
    } else {
        return (
            <div className=''>
                <NavBar></NavBar>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <img src={data.img.replace('220-220', '530-530')} alt="" className='img-fluid ' width={500} height={500} />

                        </div>
                        <div className="col  h-auto">
                            <h1>{data.name}</h1>
                            <h4 className='fw-bold'>{formatter.format(data.price)}</h4>
                            <div className="">
                                {[...Array(data.rating)].map((_, idx) => {
                                    return (
                                        <i className="fas fa-star text-warning" key={idx}></i>
                                    )
                                })}
                                {[...Array(5 - data.rating)].map((_, idx) => {
                                    return (
                                        <i className="far fa-star text-secondary" key={idx}></i>
                                    )
                                })}
                                &nbsp;{data.rating}/5
                            </div>
                            <div className="d-inline">
                                <div className="d-flex align-items-center mt-2">
                                    <div className="">
                                        Cantidad:&nbsp;
                                    </div>
                                    <input type="button" onClick={handlesub} className='d-inline btn btn-secondary px-2 py-1 mx-1' value="-" />
                                    <input type="text" onChange={handleChange} value={cantidad} className='input-group-text d-inline p-1' size={1} />
                                    <input type="button" onClick={() => { setcantidad(+cantidad + +'1') }} className='d-inline btn btn-secondary px-2 py-1 mx-1' value="+" />
                                </div>
                            </div>
                            <div className="row align-items-end h-50">
                                <button className='btn btn-info w-100 col mx-2' onClick={handleCart}><i className="fas fa-cart-arrow-down"></i> A&ntilde;adir al carrito</button>
                                <button className='btn btn-warning w-100 col mx-2' onClick={handleBuyClick}>Comprar</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        )
    }

}

