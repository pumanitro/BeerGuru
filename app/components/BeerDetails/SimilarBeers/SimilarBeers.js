import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionTypes} from '../../../redux/actions/ActionTypes';
import {makeAction} from '../../../redux/actions/ActionCreator';

class SimilarBeers extends React.Component {

    componentDidMount() {

        const {beer, getSimilarBeers} = this.props;
        getSimilarBeers(beer);
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

const mapDispatchToProps = {
    getSimilarBeers: makeAction(ActionTypes.beers.GET_SIMILAR_BEERS)
};

export default connect(null, mapDispatchToProps)(SimilarBeers);

