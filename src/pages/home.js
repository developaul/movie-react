import React from 'react';

import { Row, Col } from 'antd';

import SliderMovies from '../components/SliderMovies';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

import useFetch from '../hooks/useFetch';
import { URL_API, API } from '../utils/constans';

const Home = () => {

    const newMovies = useFetch( 
        `${ URL_API }/movie/now_playing?api_key=${ API }&language=es-ES&page=1`,
    );

    const popularMovies = useFetch(
        `${ URL_API }/movie/popular?api_key=${ API }&language=es-ES&page=1`
    );

    const topRatedMovies = useFetch(
        `${ URL_API }/movie/top_rated?api_key=${ API }&language=es-ES&page=1`
    );

    return (
        <>
            <SliderMovies movies={ newMovies } />

            <Row>
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <MovieList
                        title="Peliculas Populares"
                        movies={ popularMovies } 
                    />
                </Col>
 
                <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <MovieList
                        title="Peliculas Más Votadas"
                        movies={ topRatedMovies }
                    />
                </Col>
            </Row>

            <Footer />
        </>
    );
};

export default Home;