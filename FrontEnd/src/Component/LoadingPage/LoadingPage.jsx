import React from 'react';
import '../../assets/css/Themes/loading.css';

export default function LoadingPage() {

    return (

        <>


            <div className='container-fluid m-0 vh-100 row justify-content-center align-items-center'>
                <div className='col'>
                    <div className="cssload-preloader cssload-loading">
                        <span className="cssload-slice"></span>
                        <span className="cssload-slice"></span>
                        <span className="cssload-slice"></span>
                        <span className="cssload-slice"></span>
                        <span className="cssload-slice"></span>
                        <span className="cssload-slice"></span>
                    </div>
                </div>
            </div>
        </>

    );

}
