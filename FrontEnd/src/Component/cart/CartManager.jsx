import React, { useContext, useEffect, useState } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext/CartContext';
import ContentSwitch from './ContentSwitch';
import TransferEth from './payment';

export function UserForm() {
    const [Step, setStep] = useState(1);
    const [progress, setprogress] = useState(20);
    const navigate = useNavigate();
    var { getTotalPrice } = useContext(CartContext);
    const [priceEth, setpriceEth] = useState(0)
    const Web3Api = useMoralisWeb3Api();

    const [form, setfromData] = useState({

        "Nombre": '',
        "Apellidos": '',
        "Movil": '',
        "DNI": '',
        "Calle": '',
        "pais": '',
        "Codigo": '',
        "Poblacion": '',
        "Provincia": ''

    });


    const [RegaloText, setRegaloText] = useState('');

    const nextStep = () => {
        if (Step < 5) {
            setStep(Step + 1);
            setprogress(progress + 20)
        }

    };


    const prevStep = () => {
        if (Step > 1) {
            setprogress(progress - 20)
            setStep(Step - 1);
        }

    };
    useEffect(()=>{
            const options = {
                address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    
            };
            Web3Api.token.getTokenPrice(options).then(e=>{
                setpriceEth((getTotalPrice() / e.usdPrice).toFixed(6))
            })  
      
    },[])
    return (
        <div className='container'>
            <header className='mb-5'>
                <img src={require('../../assets/image/logo.png')} alt="" className='img-fluid' onClick={() => { navigate('/') }} />
            </header>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ "width": progress + '%' }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            {<ContentSwitch nextStep={nextStep} form={form} RegaloText={RegaloText} setfromData={setfromData} setRegaloText={setRegaloText} Step={Step} ></ContentSwitch>}
            {Step !== 1 && Step !== 5 && (
                <div className="w-50 mx-auto d-flex justify-content-between mt-3">
                    <button className='btn btn-primary px-5 py-3' onClick={prevStep}>Back</button>
                    <button className='btn btn-primary px-5 py-3' onClick={nextStep}>Next</button>
                </div>
            )}
            {Step === 5 && (
                <div className="d-flex justify-content-between">
                    <button className='btn btn-primary btn-lg w-25' onClick={prevStep}>Back</button>
                    <TransferEth price={priceEth} text={RegaloText}></TransferEth>
                </div>
            )}
        </div>
    )
}

export default UserForm;
