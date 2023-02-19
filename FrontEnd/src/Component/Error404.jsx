// Importamos las cosas necesarias de react.
import React from 'react';

// Importamos el diseño de la página.
import '../assets/css/Themes/error404.css';

export default function Error404() {
    return (

        <div className="mainerror">

            <div id="error-page">

                <div className="content">

                    <h2 className="header ">
                        404
                    </h2>

                    <h4>
                        Opps! Page not found
                    </h4>

                    <p>
                        Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                    </p>

                </div>

            </div>

        </div>

    );
}
