import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const BeerDetails = ({beer}) => {

    return (
        <div>
            <h3>{beer.name}</h3>
        </div>
    );
};

BeerDetails.propTypes = {
    beer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    beer: state.beers.get(ownProps.beerId)
});

export default connect(mapStateToProps, null)(BeerDetails);
