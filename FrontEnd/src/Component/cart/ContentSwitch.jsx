import React from 'react';
import Cart from './form/Cart';
import DeliverOptions from './form/DeliverOptions';
import Direction from './form/Direction';
import PaymentMethod from './form/PaymentMethod';
import Resume from './form/Resume';

export default function ContentSwitch({ Step, nextStep, setfromData, form, RegaloText, setRegaloText }) {

    switch (Step) {
        case 1:
            return (<Cart nextStep={nextStep} />);
        case 2:
            return (<Direction setfromData={setfromData} form={form} />)
        case 3:
            return (<DeliverOptions setRegaloText={setRegaloText} />)
        case 4:
            return (<PaymentMethod />)
        case 5:
            return (<Resume form={form} RegaloText={RegaloText} />)
        default:
            return (<div className="">123</div>)
    }
}