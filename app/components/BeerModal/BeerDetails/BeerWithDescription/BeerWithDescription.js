import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerWithDescription.scss';

const BeerWithDescription = ({beer}) => {

    return (
        <div className={styles['beer-with-description__container']}>
            <img className={styles['beer-with-description__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
            <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <div className={styles['beer-with-description__indicator-wrapper']}>
                    <span><b>IBU</b>: {beer.ibu || ' - '}</span>
                    <span><b>ABV</b>: {beer.abv || ' - '}%</span>
                    <span><b>EBC</b>: {beer.ebc || ' - '}</span>
                </div>
                <h4>Description:</h4>
                <p>{beer.description}</p>
                <h4>Brewer tips:</h4>
                <p>{beer.brewers_tips}</p>
            </div>
        </div>
    );
};

BeerWithDescription.propTypes = {
    beer: PropTypes.object.isRequired
};

export default BeerWithDescription;
