import React from 'react';

import SliderMovies from '../components/SliderMovies';

import useFetch from '../hooks/useFetch';
import { URL_API, API } from '../utils/constans';

const Home = () => {

    const newMovies = useFetch( 
        `${ URL_API }/movie/now_playing?api_key=${ API }&language=es-ES&page=1`,
    );

    return (
        <>
            <SliderMovies movies={ newMovies } />
        </>
    );
};

export default Home;