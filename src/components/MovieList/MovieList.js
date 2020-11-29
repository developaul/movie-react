import React from 'react';
import PropTypes from 'prop-types';

import { List, Avatar, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import './MovieList.scss';

const MovieList = ({ title, movies }) => {

    const { loading, result } = movies;

    if( loading || !result ) return <Loading /> 

    const { results } = result;

    return (
        <List
            className="movie-list"
            size="default"
            header={<h2>{ title }</h2>}
            bordered
            dataSource={ results }
            renderItem={ movie => <RenderMovie movie={ movie } /> }
        />
    );
};

const RenderMovie = ({ movie }) => {
    
    const { id, title, poster_path } = movie;

    const poster_Path =  `https://image.tmdb.org/t/p/original${ poster_path }`;

    return (
        <List.Item className="movie-list__movie">
            <List.Item.Meta
                avatar={ <Avatar src={ poster_Path } /> }
                title={ <Link to={`/movie/${ id }`} >{ title }</Link> }
            />

            <Link to={`/movie/${ id }`}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={ <RightOutlined /> }
                />
            </Link>
        </List.Item>
    );
};

MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.object.isRequired
};

RenderMovie.propTypes = {
    movies: PropTypes.object.isRequired
}

export default MovieList;