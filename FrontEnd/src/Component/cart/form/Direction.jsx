import React, { useRef } from 'react'

export default function Direction({ setfromData, form }) {

    var Nombre = useRef()
    var Apellidos = useRef()
    var Movil = useRef()
    var DNI = useRef()
    var Calle = useRef()
    var pais = useRef()
    var Codigo = useRef()
    var Poblacion = useRef()
    var Provincia = useRef()
    const handleForm = (e) => {
        setfromData({
            "Nombre": Nombre.current.value,
            "Apellidos": Apellidos.current.value,
            "Movil": Movil.current.value,
            "DNI": DNI.current.value,
            "Calle": Calle.current.value,
            "pais": pais.current.value,
            "Codigo": Codigo.current.value,
            "Poblacion": Poblacion.current.value,
            "Provincia": Provincia.current.value
        })
    }
    return (
        <div className='container-fluid'>
            <div className="h1 text-center">Direccion de envio: </div>
            <form className='container-fluid mx-auto w-50 ' onChange={handleForm}>
                <div className="row mx-auto ">
                    <div className="h5">Datos Personales</div>
                    <div className="row mb-2">
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Nombre" placeholder=" " ref={Nombre} value={form.Nombre} onChange={handleForm} />
                                <label htmlFor="Nombre">Nombre: </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Apellidos" placeholder=" " ref={Apellidos} value={form.Apellidos} onChange={handleForm} />
                                <label htmlFor="Apellidos">Apelldios: </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="DNI" placeholder=" " ref={DNI} value={form.DNI} onChange={handleForm} />
                                <label htmlFor="DNI">DNI: </label>
                            </div>

                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input type="tel" className="form-control" id="MOVIL" placeholder=" " ref={Movil} value={form.Movil} onChange={handleForm} />
                                <label htmlFor="MOVIL">Movil: </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto my-2">
                    <div className="h5">Direccion de envio</div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="calle" placeholder=" " ref={Calle} value={form.Calle} onChange={handleForm} />
                        <label htmlFor="calle" className='ps-4'> Calle: </label>
                    </div>
                </div>
                <div className="row mx-auto">
                    <div className="row mb-2">
                        <div className="col">
                            <select className="form-select p-3" id="pais" ref={pais} value={form.pais} onChange={handleForm}>
                                <option value="a" disabled className='text-muted'>Pais</option>
                                <option value="Alemania">Alemania</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Austria">Austria</option>
                                <option value="Belgica">Belgica</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Chipre">Chipre</option>
                                <option value="Croacia">Croacia</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Eslovaquia">Eslovaquia</option>
                                <option value="Eslovenia">Eslovenia</option>
                                <option value="Espana">Espana</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Finlandia">Finlandia</option>
                                <option value="Francia">Francia</option>
                                <option value="Grecia">Grecia</option>
                                <option value="Hungria">Hungria</option>
                                <option value="Irlanda">Irlanda</option>
                                <option value="Italia">Italia</option>
                                <option value="Letonia">Letonia</option>
                                <option value="Lituania">Lituania</option>
                                <option value="Luxemburgo">Luxemburgo</option>
                                <option value="Malta">Malta</option>
                                <option value="Paises Bajos">Paises Bajos</option>
                                <option value="Polonia">Polonia</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Reino Unido">Reino Unido</option>
                                <option value="Suecia">Suecia</option>
                            </select>
                        </div>
                        <div className="col">
                            <div className="form-floating">
                                <input type="number" max={99999} min={10000} maxLength={5} className="form-control" id="Codigo" placeholder=" " ref={Codigo} value={form.Codigo} onChange={handleForm} />
                                <label htmlFor="Codigo">Codigo Postal: </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Poblacion" placeholder=" " ref={Poblacion} value={form.Poblacion} onChange={handleForm} />
                                <label htmlFor="Poblacion">Poblacion: </label>
                            </div>

                        </div>
                        <div className="col">
                            <select className="form-select p-3" id="Provincia" ref={Provincia} value={form.Provincia} onChange={handleForm}>
                                <option value="a" disabled className='text-muted'>Provincia</option>
                                {(form.pais == 'Espana') ?
                                    (<>
                                        <option value="A Coruna">A Coruna</option>
                                        <option value="Alava">Alava</option>
                                        <option value="Albacete">Albacete</option>
                                        <option value="Alicante">Alicante</option>
                                        <option value="Almeria">Almeria</option>
                                        <option value="Asturias">Asturias</option>
                                        <option value="Avila">Avila</option>
                                        <option value="Badajoz">Badajoz</option>
                                        <option value="Baleares">Baleares</option>
                                        <option value="Barcelona">Barcelona</option>
                                        <option value="Burgos">Burgos</option>
                                        <option value="Caceres">Caceres</option>
                                        <option value="Cadiz">Cadiz</option>
                                        <option value="Cantabria">Cantabria</option>
                                        <option value="Castellon">Castellon</option>
                                        <option value="Ceuta">Ceuta</option>
                                        <option value="Ciudad">Ciudad Real</option>
                                        <option value="Cordoba">Cordoba</option>
                                        <option value="Cuenca">Cuenca</option>
                                        <option value="Girona">Girona</option>
                                        <option value="Granada">Granada</option>
                                        <option value="Guadalajara">Guadalajara</option>
                                        <option value="Guipuzcoa">Guipuzcoa</option>
                                        <option value="Huelva">Huelva</option>
                                        <option value="Huesca">Huesca</option>
                                        <option value="Jaen">Jaen</option>
                                        <option value="La">La Rioja</option>
                                        <option value="Las">Las Palmas</option>
                                        <option value="Leon">Leon</option>
                                        <option value="Lleida">Lleida</option>
                                        <option value="Lugo">Lugo</option>
                                        <option value="Madrid">Madrid</option>
                                        <option value="Malaga">Malaga</option>
                                        <option value="Melilla">Melilla</option>
                                        <option value="Murcia">Murcia</option>
                                        <option value="Navarra">Navarra</option>
                                        <option value="Ourense">Ourense</option>
                                        <option value="Palencia">Palencia</option>
                                        <option value="Pontevedra">Pontevedra</option>
                                        <option value="Salamanca">Salamanca</option>
                                        <option value="Segovia">Segovia</option>
                                        <option value="Sevilla">Sevilla</option>
                                        <option value="Soria">Soria</option>
                                        <option value="Tarragona">Tarragona</option>
                                        <option value="Tenerife">Tenerife</option>
                                        <option value="Teruel">Teruel</option>
                                        <option value="Toledo">Toledo</option>
                                        <option value="Valencia">Valencia</option>
                                        <option value="Valladolid">Valladolid</option>
                                        <option value="Vizcaya">Vizcaya</option>
                                        <option value="Zamora">Zamora</option>
                                        <option value="Zaragoza">Zaragoza</option>
                                    </>
                                    ) : (<option > {form.pais}</option>)}

                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
