// Importamos las cosas necesarias de react.
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import api from '../../config.json'
import { useParams, useNavigate } from 'react-router-dom';

// Importamos componentes.
import { UserContext } from '../Context/User/UserContext';
import LoadingPage from '../LoadingPage/LoadingPage';
import { PaginatedItems, Items } from './Paginator'

import NavBar from './NavBar';
import Footer from './Footer';

export default function HomeScreen() {
    const { category_url } = useParams();
    const [products, setproducts] = useState([]);
    const [categories, setcategories] = useState([])
    const [SortType, setSortType] = useState('')
    const navigate = useNavigate()
    const [currentItems, setCurrentItems] = useState(null);
    useEffect(() => {

        axios.get(api.API_URL + 'categories').then((res, err) => {
            if (!err) {
                setcategories(res.data)
            }
        })
        if (!category_url) {
            axios.get(api.API_URL + 'products').then((res, err) => {
                if (!err) {
                    setproducts(res.data)
                }

            })
        } else {
            axios.post(api.API_URL + 'categories', { 'category': category_url }).then((res, err) => {
                if (!err) {
                    setproducts(res.data)

                }

            })
        }
    }, [category_url])

    useEffect(() => {
        var sorted;
        if (SortType === 'revelancia') {
            sorted = [...products].sort((a, b) => a.id - b.id);
        } else if (SortType === 'price-asc') {
            sorted = [...products].sort((a, b) => a.price - b.price);
        } else {
            sorted = [...products].sort((a, b) => b.price - a.price);
        }

        setproducts(sorted)
    }, [SortType])

    const handleChanged = (e) => {
        const value = e.target.value
        navigate('/categories/' + value)
        // axios.post(api.API_URL + 'categories', { 'category': value }).then((res, err) => {
        //     if (!err) {
        //         setproducts(res.data)
        //     }
        // })

    }


    if (!products || !categories) {
        return (
            <LoadingPage />
        )
    } else {

        return (
            <div>
                <NavBar setproducts={setproducts}></NavBar>
                <div className="">
                    <div className="border p-2 px-5  d-flex justify-content-between">
                        <select className="form-select form-select-sm w-auto" aria-label=".form-select-sm " onChange={handleChanged} defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled >Categorias</option>
                            {categories.map((val, idx) => {

                                return (
                                    <option value={val.categories} key={idx} defaultValue={category_url === val.categories}>{val.categories} </option>
                                )
                            })}
                        </select>

                        <select className='form-select form-select-sm w-auto' onChange={(e) => setSortType(e.target.value)}>
                            <option value="revelancia">Revelancia</option>
                            <option value="price-desc">Precio: Mas caros</option>
                            <option value="price-asc">Precio: Mas baratos</option>
                        </select>
                    </div>
                    <div className="row row-cols row-cols-md-5 g-5 w-75 mx-auto mt-0">
                        <Items currentItems={currentItems} />
                    </div>
                    <PaginatedItems itemsPerPage={20} products={products} setCurrentItems={setCurrentItems} categories={categories} SortType={SortType}></PaginatedItems>

                </div>
                <Footer></Footer>
            </div >

        );
    }
}
