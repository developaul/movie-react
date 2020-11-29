import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom'; 
import moment from 'moment';

import useFetch from '../../hooks/useFetch';
import { URL_API, API } from '../../utils/constans';
import Loading from '../../components/Loading';

import './movie.scss';

const Movie = () => {

    const { id } = useParams();

    const movieInfo = useFetch(
        `${ URL_API }/movie/${ id }?api_key=${ API }&language=es-ES`
    );

    const { loading, result } = movieInfo;

    if( loading || !result ) return <Loading />;

    return <RenderMovie movieInfo={ result } />;
};

const RenderMovie = ({ movieInfo }) => {

    const { backdrop_path, poster_path } = movieInfo;

    const backdrop_Path = `https://image.tmdb.org/t/p/original${ backdrop_path }`;

    console.log( movieInfo );

    return (
        <div 
            className="movie"
            style={{ backgroundImage: `url('${ backdrop_Path }')` }}
        >
            <div className="movie__dark"></div>

            <Row
                justify='center'
            >
                <Col 
                className="movie__poster"
                xs={{ span: 16 }}
                lg={{ span: 8 }}
                >
                    <PosterMovie image={ poster_path } />
                </Col>
            
                <Col 
                className="movie__info"
                xs={{ span: 20 }}
                lg={{ span: 10 }}
                >
                    <MovieInfo movieInfo={ movieInfo } />
                </Col>
            </Row>
        </div>
    );
};

const PosterMovie = ({ image }) => {
    const poster_Path = `https://image.tmdb.org/t/p/original${ image }`;
    return <div style={{backgroundImage: `url('${ poster_Path }')`}}></div>;
};

const MovieInfo = ({ movieInfo }) => {

    const { title, release_date, overview, genres } = movieInfo;

    return (
        <>
            <div className="movie__info-header">
                <h1>
                    { title }
                    <span>{ moment( release_date, 'YYYY-MM-DD' ).format( 'YYYY' ) }</span>
                </h1>

                <button>
                    Ver Trailer
                </button>
            </div>

            <div className="movie__info-content">
                <h3>General</h3>
                
                <p>{ overview }</p>

                <h3>Generos</h3>

                <ul>
                    {
                        genres.map( ({ id, name }) => (
                            <li key={ id } >{ name }</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

RenderMovie.propTypes = {
    movieInfo: PropTypes.object.isRequired
};

PosterMovie.propTypes = {
    image: PropTypes.string.isRequired
};

MovieInfo.propTypes = {
    movieInfo: PropTypes.object.isRequired
};

export default Movie;