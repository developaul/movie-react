import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'rc-pagination';

import './Pagination.scss';

const PaginationMovies = ({ currentPage, totalItems, onChangePage }) => (
    <Pagination
        className="pagination"
        current={ currentPage }
        total={ totalItems }
        pageSize={ 20 }
        onChange={ onChangePage }
    />
);

PaginationMovies.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
};

export default PaginationMovies;