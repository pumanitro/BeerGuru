/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Beer = ({beerData}) => {

    return (
        <div>
            {beerData.name}
        </div>
    );
};

Beer.propTypes = {
    beerData: PropTypes.object.isRequired
};

export default Beer;
