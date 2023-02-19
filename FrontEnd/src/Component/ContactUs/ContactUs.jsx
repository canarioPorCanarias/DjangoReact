import React, { useRef } from 'react'
import NavBar from '../Home/NavBar'
import Swal from 'sweetalert2';
import axios from 'axios';
import api from '../../config.json'

export default function ContactUs() {
    var nombre = useRef();
    var email = useRef();
    var texto = useRef();
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    const handleClick=  (e)=>{
        e.preventDefault();
        // var _name=nombre.current.value;
        // var _email=email.current.value;
        // var _text=texto.current.value;
        // if((_name.length >100 || _name.length < 2)(_email.length > 100 || _email.length < 12)(_text.length > 500 || _text.length < 20)){
        //     Toast.fire({icon:"warning",title:"Campos Invalidos",text:"la longitud de algunos campos son invalidos"})
        // }
        axios.post(api.API_URL+"contact-form",{name:nombre.current.value,email:email.current.value,text:texto.current.value}).then((res,err)=>{
            Toast.fire({icon:"success",title:"Mensage Mandado"});
        })
        
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <div className="container">
                    <h3 className='text-center my-5'>Cont&aacute;ctanos</h3>
                    <div className="w-50 mx-auto align-center">
                        <form  onSubmit={handleClick} >
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="name" placeholder="Name: " ref={nombre} />
                            <label htmlFor="name">Name: </label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="email" className="form-control" id="email" placeholder="Email: " ref={email}/>
                            <label htmlFor="email">Email: </label>
                        </div>

                        <div className="form-floating mb-2">
                            <textarea data-bs-toggle="tooltip" title="maximo 300 caracteres" ref={texto} maxLength={300} className="form-control" style={{height:'15rem'}} id="content" placeholder="Email: "  />
                            <label htmlFor="content">Describenos tus dudas: </label>
                        </div>
                        <div className="d-flex justify-content-center">
                        <input type='submit' className='btn btn-info w-50 mx-auto'value={'Enviar'}/>

                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
