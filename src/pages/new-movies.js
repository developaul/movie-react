import React, { useState, useEffect } from 'react';

import { Row, Col } from 'antd';

import { URL_API, API } from '../utils/constans';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const NewMovies = () => {

    const [ movieList, setMovieList ]   = useState( [] );
    const [ page, setPage ]             = useState( 1 );

    useEffect( () => {

        ( async () => {

            const response  = await fetch( 
                `${ URL_API }/movie/now_playing?api_key=${ API }&language=es-ES&page=${ page }`
            );

            const movies    = await response.json();

            setMovieList( movies );
        })();

    }, [ page ] );

    const { results } = movieList;

    return (
        <Row>
            <Col 
                span="24"
                style={{ textAlign: "center", marginTop: 25 }}
            >
                <h1
                    style={{ fontSize: 35, fontWeight: "bold" }}
                >
                    Últimos Lanzamientos
                </h1>
            </Col>

            {
                results ? 
                    (
                        <Col span="24">
                            Todas las peliculas
                        </Col>
                    )
                    :
                    (
                        <Col span="24">
                            <Loading />
                        </Col>
                    )
            }

            <Col span="24">
                <Footer/>
            </Col>
        </Row>
    );
};

export default NewMovies;