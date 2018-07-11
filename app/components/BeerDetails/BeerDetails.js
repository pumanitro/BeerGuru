import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BeerDetails.scss';
import SimilarBeers from './SimilarBeers/SimilarBeers';
import BeerWithDescription from './BeerWithDescription/BeerWithDescription';

const BeerDetails = ({beer}) => {

    return (
        <div className={styles['beer-details__container']}>
            <BeerWithDescription beer={beer} />
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
