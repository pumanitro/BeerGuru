import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BeerDetails.scss';
import SimilarBeers from './SimilarBeers/SimilarBeers';

const BeerDetails = ({beer}) => {

    return (
        <div className={styles['beer-detail__container']}>
            <img className={styles['beer-detail__img']} src={beer.image_url} alt={`Beer - ${beer.name}`} />
            <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <div>
                    <span>IBU: {beer.ibu}</span>
                    <span>ABV: {beer.abv}</span>
                    <span>EBC: {beer.ebc}</span>
                </div>
                <h4>Description:</h4>
                <p>{beer.description}</p>
                <h4>Brewer tips:</h4>
                <p>{beer.brewers_tips}</p>
            </div>
            <SimilarBeers beer={beer} />
        </div>
    );
};

BeerDetails.propTypes = {
    beer: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    beer: state.beers.get(ownProps.beerId)
});

export default connect(mapStateToProps, null)(BeerDetails);
