import React from 'react';
import PropTypes from 'prop-types';

import { Col, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './MovieCatalog.scss';

const MovieCatalog = ({ movies }) => {

    const { results } = movies;

    return results.map( movie => (
        <Col key={ movie.id } className="movie-catalog">
            <MovieCard movie={ movie } />
        </Col>
    ));
};

const MovieCard = ({ movie }) => {

    const { id, title, poster_path } = movie;
    const { Meta } = Card;
    const poster_Path = `https://image.tmdb.org/t/p/original/${ poster_path }`;

    return (
        <Link to={ `/movie/${ id }` } >
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img src={ poster_Path } alt={ title } />}
                actions={[ <EyeOutlined /> ]}
            >
                <Meta title={ title } />
            </Card>
        </Link>
    );
};

MovieCatalog.propTypes = {
    movies: PropTypes.object.isRequired
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieCatalog;