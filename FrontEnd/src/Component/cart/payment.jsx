import axios from "axios";
import React, { useContext } from "react";
import { useWeb3Transfer, useMoralis } from "react-moralis";
import { CartContext } from "../Context/CartContext/CartContext";
import api from '../../config.json'
import swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function TransferEth({ price, text }) {
  const { cartItems, clearCart } = useContext(CartContext);
  const { Moralis, isAuthenticated, account } = useMoralis()
  const navigate = useNavigate();
  const { fetch, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(price),
    receiver: "0x18Ac030B5A633f2b79c79233E732878f88A9e28C",

  });

  const handleFetch = () => {
    fetch().then(e => {
      var hash = e.hash;
      var ethAdress = account;
      var cart = JSON.stringify(cartItems);
      axios.post(api.API_URL + 'orders', { hash, ethAdress, cart, price, text }).then(() => {
        swal.fire({ titleText: "Order Completed", text: "Your order has been made", icon: "success" });
        clearCart();
        setTimeout(() => {
          navigate('/');
        }, 3000)
      })
    }).catch(() => {
      
      swal.fire("Error", "Error with the order", "warning");
    }

    )
  }




  if (!isAuthenticated || !account) {
    return (
      <h1>no account</h1>
    )
  } else {
    return (

      <button onClick={() => handleFetch()} disabled={isFetching} className='btn btn-warning btn-lg w-25'>Terminal Compra</button>

    );
  }
}