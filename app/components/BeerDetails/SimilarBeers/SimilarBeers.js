import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionTypes} from '../../../redux/actions/ActionTypes';
import {makeAction} from '../../../redux/actions/ActionCreator';
import Spinner from '../../common/Spinner/Spinner';
import SimilarBeer from './SimilarBeer/SimilarBeer';
import styles from './SimilarBeers.scss';

class SimilarBeers extends React.Component {

    componentDidMount() {

        const {beer, getSimilarBeers} = this.props;
        getSimilarBeers(beer);
    }

    render() {

        const {beer} = this.props;

        return (
            <div>
                {
                    beer.similarBeers.areFetched
                        ? (
                            <div className={styles['similar-beers__container']}>
                                <h3> Similar: </h3>
                                <div className={styles['similar-beers__wrapper']}>
                                    <SimilarBeer beer={beer.similarBeers.abvBeer} />
                                    <SimilarBeer beer={beer.similarBeers.ibuBeer} />
                                    <SimilarBeer beer={beer.similarBeers.ebcBeer} />
                                </div>
                            </div>
                        )
                        : <Spinner />
                }
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

