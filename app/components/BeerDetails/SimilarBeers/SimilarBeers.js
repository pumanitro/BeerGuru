import React from 'react';
import PropTypes from 'prop-types';
import BeerService from '../../../services/BeerService/BeerService';

class SimilarBeers extends React.Component {

    componentDidMount() {

        const {beer} = this.props;

        BeerService.getSimilarBeers(beer)
            .then((resp) => {
                console.warn(resp);
            });
    }

    render() {
        return (
            <div>
                <div> Beer 1</div>
            </div>
        );
    }
}

SimilarBeers.propTypes = {
    beer: PropTypes.object.isRequired
};

export default SimilarBeers;
