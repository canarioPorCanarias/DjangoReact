import React, { useEffect, Suspense, lazy } from 'react';

// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/Themes/index.css';
import LoadingPage from './Component/LoadingPage/LoadingPage';
import ProductsPages from './Component/articles/ProductsPages';
import { useMoralis } from 'react-moralis';


// Importando componentes con delay
const Error404 = lazy(() => import("./Component/Error404"));
const HomeScreen = lazy(() => import("./Component/Home/HomeScreen"));
const Dashboard = lazy(() => import("./Component/Dashboard/Dashboard"));
const Cart = lazy(() => import('./Component/cart/CartManager'));
const UserPanel = lazy(() => import('./Component/user/UserPanel'));
const ContactUs = lazy(() => import('./Component/ContactUs/ContactUs'))

const Router = () => {
    const { isWeb3Enabled, enableWeb3 } = useMoralis()
    useEffect(() => {
        if (localStorage.getItem('cart') === null) {
            localStorage.setItem('cart', '[]')
        }
    }, [])

    useEffect(() => {
        if (!isWeb3Enabled) {
            enableWeb3({ provider: 'metamask' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isWeb3Enabled]);


    return (

        <Suspense fallback={<LoadingPage />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact={true} element={<HomeScreen />} />
                    <Route path="/categories/:category_url" exact={true} element={<HomeScreen />} />
                    <Route path="/p/:slug" exact={true} element={<ProductsPages />} />
                    <Route path="/cart" exact={true} element={<Cart />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='loading' element={<LoadingPage />} />

                    <Route path='user' element={<UserPanel />} >
                        <Route path=':action' element={<UserPanel />}></Route>
                    </Route>
                    <Route path='ContactUs' element={<ContactUs />} />

                    <Route path='*' element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </Suspense>

    );


}

export default Router;