import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import MovieCatalog from '../../components/MovieCatalog';
import Footer from '../../components/Footer';
import { URL_API, API } from '../../utils/constans';

import './search.scss';

const Search = ({ location, history }) => {

    const { search } = location;

    const [ movieList, setMovieList ]       = useState( [] );
    const [ searchValue, setSearchValue ]   = useState( '' );

    useEffect( () => {

        ( async () => {

            const searchValue   = queryString.parseUrl( search );
            const { s }         = searchValue.query;

            const response      = await fetch(
                `${ URL_API }/search/movie?api_key=${ API }&language=es-ES&query=${ s }&page=1`
            );

            const movies        = await response.json();

            setSearchValue( s );
            setMovieList( movies );
        })();

    }, [ search ]);

    const { results } = movieList;

    const onChangeSearch = e => {
        const urlParams = queryString.parse( search );
        urlParams.s     = e.target.value;
        history.push( `?${ queryString.stringify( urlParams ) }` );
        setSearchValue( e.target.value );
    }

    return (
        <Row>
            <Col 
                className="search"
                span={12}
                style={{ margin: '0 auto' }}
                // offset={6}
            >
                <h1>Busca tu película</h1>
                <Input 
                    onChange={ onChangeSearch }
                    value={ searchValue }
                />
            </Col>

            { results && 
                (
                    <Col 
                        span={ 24 }
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat( auto-fit, minmax( 250px, 1fr ) )`,
                            gridGap: 20
                        }}
                    >
                        <MovieCatalog movies={ movieList } />
                    </Col>
                )
            }

            <Col span={24}>
                <Footer />
            </Col>
        </Row>
    );
};

Search.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter( Search );