import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../Auth/auth'
import DarkMode from '../utils/DarkMode'
import axios from 'axios';
import api from '../../config.json'

export default function NavBar({ setproducts }) {
    const [width, setwidth] = useState(0)
    const [show, setshow] = useState(false)
    const [content, setcontent] = useState('')

    var search_bar = useRef();
    var searchItemsDiv = useRef();

    useEffect(() => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.querySelector("#dn").checked = true
        }
        setwidth(search_bar.current.clientWidth)
    }, [])


    document.body.onresize = () => { setwidth(search_bar.current.clientWidth) }
    var navigate = useNavigate()

    const handleChangeSearchBar = () => {
        axios.post(api.API_URL + 'findItem', { "searchItem": search_bar.current.value }).then((res, err) => {
            setcontent(res.data.map((i, idx) => (<a href="#" key={idx} style={{ 'textDecoration': 'none' }} onClick={() => navigate('/p' + i['slug'])}><div className="search-bar-item">{i['name']}</div></a>)))
        })
    }
    const handleFindItems = (e) => {
        e.preventDefault();
        axios.put(api.API_URL + 'findItem', { "searchItem": search_bar.current.value }).then((res, err) => {
            setproducts(res.data)
        })
    }




    return (
        <nav className="navbar navbar-expand-lg py-0" id="navbar-home" style={{ paddingLeft: '10em', paddingRight: '10em' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={() => { navigate('/') }}>
                    <img src={require('../../assets/image/logo.png')} alt="logo" width="120" height="60%" className="align-text-top pe-2 py-2 ms-5" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <form className="d-flex me-4" onSubmit={handleFindItems}>
                            <input type="search" ref={search_bar} name="" id="" onFocus={() => { setshow(true) }}
                                onBlur={() => {
                                    setTimeout(() => {
                                        setshow(false)
                                    }, 200);
                                }}
                                className='lupa form-control bg-info' placeholder='Buscar ...' style={{ position: 'inherit' }} size={80}
                                onChange={handleChangeSearchBar}


                            />
                            <div className="d-block search-bar" id='search-results' ref={searchItemsDiv} style={{ width, visibility: (show ? 'visible' : 'hidden') }}>
                                {content}
                            </div>
                        </form>

                        <li className="nav-item ms-5">
                            <Auth />
                        </li>
                        <li className="nav-item  nav-item-home">
                            <a className="nav-link text-center position-relative" href="#" onClick={() => { navigate('/cart') }}>
                                <i className="fas fa-shopping-cart"></i>&nbsp;

                                Mi Carrito</a>
                        </li>
                        <li className='nav-item d-flex align-items-center ms-4'>
                            <DarkMode />
                        </li>

                    </ul>
                </div>
            </div>

        </nav >
    )
}
