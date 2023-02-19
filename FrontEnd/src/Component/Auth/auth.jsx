import React, { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useNavigate } from 'react-router-dom';

function Auth() {
    const [balance, setbalance] = useState('')
    const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();
    
    const navigate = useNavigate();
    const Web3Api = useMoralisWeb3Api();
    const fetchNativeBalance = async () => {
        const options = {
            chain: "ropsten",
            // address: "",
        };
        const bscBalance = await Web3Api.account.getNativeBalance(options);
        var bal = bscBalance.balance
        setbalance(bal.slice(0, -18) + ',' + bal.slice(-18).slice(0, 4))
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchNativeBalance()

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);  
    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({ signingMessage: "Log in to E STORE", network: 'native' })
                .then(function (user) {
                    console.log(user)
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
        }

    }
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }
    if (!isAuthenticated) {
        return (
            <div>
                <button className='btn btn-info ms-2  w-auto' onClick={login}>Login MetaMask</button>
            </div>
        );
    } else {
        var adress = user.attributes.ethAddress
        var parsed = adress.slice(0, 6) + "..." + adress.slice(38)

        return (
            <div className="btn-group rounded-pill meta-bg">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    {parsed}
                    <img src={'https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png'} width={20} height={20} alt="" className='inline ms-2' />
                </button>
                <ul className="dropdown-menu">
                    <li className='text-center px-2'><button className="w-100 mb-1 btn btn-secondary">{balance} eth</button></li>
                    <li className='text-center px-2'> <button onClick={logOut} className='w-100 mb-1 btn btn-secondary' disabled={isAuthenticating}>Logout</button></li>
                    <li className='text-center px-2'> <button onClick={() => { navigate('/user') }} className='w-100 mb-1 btn btn-secondary' >Perfil</button></li>
                </ul>
            </div>
        )
    }
}

export default Auth;