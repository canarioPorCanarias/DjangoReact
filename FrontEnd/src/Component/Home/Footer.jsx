import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item" onClick={() => { navigate('/') }} ><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item" onClick={() => { navigate('/ContactUs') }} ><a href="#" className="nav-link px-2 text-muted">Contact Us</a></li>
                    <li className="nav-item" onClick={() => { navigate('') }} ><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item" onClick={() => { navigate('') }} ><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item" onClick={() => { navigate('/about') }} ><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">© {new Date().getFullYear()} E STORE, Inc</p>
            </footer>
        </div>
    )
}
