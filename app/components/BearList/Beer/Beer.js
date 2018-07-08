/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Beer.scss';

const Beer = ({beer}) => {

    return (
        <div>
            <img className={styles['beer__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
        </div>
    );
};

Beer.propTypes = {
    beer: PropTypes.object.isRequired
};

export default Beer;
