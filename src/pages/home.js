import React from 'react';

import useFetch from '../hooks/useFetch';

const Home = () => {

    const movies = useFetch( 
        'https://api.themoviedb.org/3/movie/popular?api_key=2578483a71cba6ae3c08127dc668b5c0&language=es-ES&page=1'
    );

    console.log( movies );

    return (
        <div>
            ESTAMOS EN HOME
        </div>
    );
};

export default Home;