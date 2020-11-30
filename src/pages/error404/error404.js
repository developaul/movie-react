import React from 'react';

import { Link } from 'react-router-dom';

import './error404.scss';

const Error404 = () => (
    <div className="error404">
        <h1>Error 404</h1>
        
        <p>Página no encontrada</p>

        <Link to="/">
            <h3>Volver al Inicio</h3>
        </Link>
    </div>
);

export default Error404;