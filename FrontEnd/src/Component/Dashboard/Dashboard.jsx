// Importamos las cosas necesarias de react.
import React from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';

// Importamos componentes

import Menu from './Pages/Menu/Menu';

const Dashboard = () => {



    // Verificar que el usuario tenga la sesión iniciada.

    let content = <div className="col py-3">
        <p>Dashboard, bienvenido a</p>
        <a className='logout' href='/' >log off</a>
    </div>;



    if (9 === undefined) {

        // Mientras se carga el contexto del usuario, mostrará la pantalla de "loading"
        return <LoadingPage></LoadingPage>

    } else {

        return (
            <>


                <Menu content={content} />

            </>
        );

    }



}

export default Dashboard;