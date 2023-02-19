import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Product({ item: product }) {
    const [show, setshow] = useState(false);
    var navigate = useNavigate();
    const handleclick = (e) => {
        navigate('/p' + product['slug'], { state: { product } })
    }

    var name = product['name'].split(" ").slice(0, 5).join(" ")

    return (
        <div className="col" onMouseEnter={() => { setshow(true) }} onMouseLeave={() => { setshow(false) }}>
            <div className="card card_product_bg h-100">
                <img className="card-img-top" src={product['img']} width={191} height={191} alt="product" />
                <div className="card-body">
                    <h5 className="card-title fs-6">{name}</h5>
                </div>
                {
                    (show ?
                        <div className="card-footer text-center p-0 g-1" >
                            <button className="w-100 border-rounded h-100 btn butto_color_yellow" onClick={handleclick}>Ver detalles</button>
                        </div> :
                        <div className="card-footer text-center">
                            <small className="fw-bold">{product['price']} $</small>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
