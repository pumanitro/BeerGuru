import React from 'react';
import PropTypes from 'prop-types';
import styles from './SimilarBeer.scss';

const SimilarBeer = ({beer}) => {

    return (
        <img className={styles['similar-beer__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
    );
};

SimilarBeer.propTypes = {
    beer: PropTypes.object.isRequired
};

export default SimilarBeer;

