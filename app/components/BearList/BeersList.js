import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {OrderedMap} from 'immutable';

const BeersList = ({beers}) => {

    return (
        <div>
            {
                beers.valueSeq().map((beer) => {
                    return <div key={beer.id}>{beer.name}</div>;
                })
            }
        </div>
    );
};

BeersList.propTypes = {
    beers: PropTypes.instanceOf(OrderedMap).isRequired
};

const mapStateToProps = state => ({
    beers: state.beers
});

export default connect(mapStateToProps, null)(BeersList);
