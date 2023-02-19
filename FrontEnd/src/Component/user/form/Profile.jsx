import React, { useState } from 'react'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

export default function Profile() {
    var { account } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const { isAuthenticated } = useMoralis();
    const [balance, setbalance] = useState(0)

    const fetchNativeBalance = async () => {
        const options = {
            chain: "ropsten",
            // address: "",
        };
        const bscBalance = await Web3Api.account.getNativeBalance(options);
        var bal = bscBalance.balance;
        setbalance(bal.slice(0, -18) + ',' + bal.slice(-18))
    };
    if (isAuthenticated) {
        fetchNativeBalance()
    }
    return (
        <div className=''>
            <h3 className="text-center">MI CUENTA</h3>
            <div className="">
                <div className="">Account: {account}</div>
                <div className="">Eth Tokens: {balance} eth</div>
            </div>
        </div>
    )
}
