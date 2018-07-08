import React from 'react';
import PropTypes from 'prop-types';
import {OrderedMap} from 'immutable';
import Beer from './Beer/Beer';
import styles from './BeerList.scss';

const BeersList = ({beers}) => {

    return (
        <div className={styles['beer-list__container']}>
            {
                beers.valueSeq().map((beer) => {
                    return <Beer key={beer.id} beer={beer} />;
                })
            }
        </div>
    );
};

BeersList.propTypes = {
    beers: PropTypes.instanceOf(OrderedMap).isRequired
};

export default BeersList;
