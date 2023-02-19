import React, { useState } from 'react'

export default function DeliverOptions({ setRegaloText }) {

    const [Active, setActive] = useState(true)
    return (
        <div className='w-50 mx-auto'>
            <div className="h5 text-center">Opciones de entrega</div>
            <div className="bg-warning">
                <div className="p-2">
                    <div className="">Regalo:</div>
                    <div className="py-1">
                        <input type="checkbox" className='me-2' id='regalo' onChange={() => setActive(!Active)} />
                        <label htmlFor="regalo">Envolver para regalo 2$</label>
                    </div>
                    <br />
                    <textarea name="" id="" className='form-control' placeholder='Mensage' defaultValue={''} onChange={e => setRegaloText(e.target.value)} disabled={Active}/>
                </div>
            </div>
            <hr />
            <div className="">
                <div className="">Coste de envio 10$</div>
            </div>
        </div>
    )
}
