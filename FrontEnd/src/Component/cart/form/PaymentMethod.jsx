import React from 'react'

export default function PaymentMethod() {
    return (
        <div className='w-50 mx-auto mt-4'>
            <h4 className="text-center">Payment </h4>
            <div className="">
                <div className="list-group">
                    <label className="list-group-item">
                        <input className="form-check-input me-1" type="radio" value="" name='coin' defaultChecked={true} />
                        Ethereum  <img src={require('../../../assets/image/eth.png')} width={30} height={30} alt="" />
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-1" disabled type="radio" value="" name='coin' />
                        Bitcoin <img src={require('../../../assets/image/btc.png')} width={30} height={30} alt="" />
                        <span className='text-muted ms-3'>Unaviable at the moment</span>
                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-1" disabled type="radio" value="" name='coin' />
                        BitcoinCash <img src={require('../../../assets/image/btcCash.png')} width={30} height={30} alt="" />
                        <span className='text-muted ms-3'>Unaviable at the moment</span>

                    </label>
                    <label className="list-group-item">
                        <input className="form-check-input me-1" disabled type="radio" value="" name='coin' />
                        Monero  <img src={require('../../../assets/image/Monero.png')} width={30} height={30} alt="" />
                        <span className='text-muted ms-3'>Unaviable at the moment</span>
                    </label>
                </div>
            </div>
        </div>
    )
}
