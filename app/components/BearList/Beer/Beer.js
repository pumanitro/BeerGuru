/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Beer.scss';

const Beer = ({beer}) => {

    return (
        <div className={styles['beer__container']}>
            <img className={styles['beer__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
            <div className={styles['beer__name']}>{beer.name}</div>
            <div className={styles['beer__tagline']}>{beer.tagline}</div>
        </div>
    );
};

Beer.propTypes = {
    beer: PropTypes.object.isRequired
};

export default Beer;
