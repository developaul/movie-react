import React from 'react';
import PropTypes from 'prop-types';

import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import './SliderMovies.scss';

const SliderMovies = ({ movies }) => {

    const { loading, result } = movies;

    if( loading || !result ) return <Loading />;

    const { results } = result;

    return (
        <Carousel
            className="slider-movies"
            autoplay
        >
            {
                results.map( movie => (
                    <Movie 
                        key={ movie.id }
                        movie={ movie }
                    />
                ))
            }
        </Carousel>
    );
};

const Movie = ({ movie }) => {

    const { id, backdrop_path, title, overview } = movie;

    const backdrop_Path = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div 
            className="slider-movies__movie"
            style={{ backgroundImage: `url( ${ backdrop_Path } )` }}
        >
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{ title }</h2>

                    <p>{ overview }</p>

                    <Link to={`/movie/${ id }`}>
                        <Button type="primary">
                            Ver más
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SliderMovies.propTypes = {
    movies: PropTypes.object.isRequired
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired
}

export default SliderMovies;