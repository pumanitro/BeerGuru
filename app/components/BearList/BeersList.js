import React from 'react';
import PropTypes from 'prop-types';
import {OrderedMap} from 'immutable';
import Beer from './Beer/Beer';

const BeersList = ({beers}) => {

    return (
        <div>
            {
                beers.valueSeq().map((beer) => {
                    return <Beer key={beer.id} beerData={beer} />;
                })
            }
        </div>
    );
};

BeersList.propTypes = {
    beers: PropTypes.instanceOf(OrderedMap).isRequired
};

export default BeersList;
