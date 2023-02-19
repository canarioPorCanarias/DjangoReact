import React from 'react';

// Componentes principales.
import { CartProvider } from './Component/Context/CartContext/CartContext';
import Router from './Router';
import './assets/css/Themes/index.css'
import { MoralisProvider } from "react-moralis";
function App() {
  return (
    <MoralisProvider serverUrl="https://xk3a5q0uwezk.usemoralis.com:2053/server" appId="jRUKuGCyJoKb5SlodAcjmpnRQkKBIYb2XyYrHKi2">
      <CartProvider>
        <Router />
      </CartProvider>
    </MoralisProvider>

  );
}

export default App;
