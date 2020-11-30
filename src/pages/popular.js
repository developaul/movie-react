import React, { useState, useEffect } from 'react';

import { Row, Col } from 'antd';

import { URL_API, API } from '../utils/constans';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog';
import Pagination from '../components/Pagination';

const Popular = () => {

    const [ movieList, setMovieList ]   = useState( [] );
    const [ page, setPage ]             = useState( 1 );

    useEffect( () => {

        ( async () => {

            const response  = await fetch( 
                `${ URL_API }/movie/popular?api_key=${ API }&language=es-ES&page=${ page }`
            );

            const movies    = await response.json();

            setMovieList( movies );
        })();

    }, [ page ] );

    const { results, page:currentPage, total_results } = movieList;

    const onChangePage = page => {
        setPage( page );
    };

    return (
        <Row>
            <Col 
                span={24}
                style={{ textAlign: "center", marginTop: 25 }}
            >
                <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
                    Películas Populares
                </h1>
            </Col>

            {
                results ? 
                    (
                        <>
                            <Col span={24}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat( auto-fit, minmax( 250px, 1fr ) )`,
                                    gridGap: 20
                                }}
                            >
                                <MovieCatalog 
                                    movies={ movieList }
                                />
                            </Col>

                            <Col span={24}>
                                <Pagination
                                    currentPage={ currentPage }
                                    totalItems={ total_results }
                                    onChangePage={ onChangePage }
                                />
                            </Col>
                        </>
                    )
                    :
                    (
                        <Col span={24}>
                            <Loading />
                        </Col>
                    )
            }

            <Col span={24}>
                <Footer/>
            </Col>
        </Row>
    );
};

export default Popular;