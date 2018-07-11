import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BeerDetails.scss';
import SimilarBeers from './SimilarBeers/SimilarBeers';
import BeerWithDescription from './BeerWithDescription/BeerWithDescription';
import Spinner from '../../common/Spinner/Spinner';
import {ActionTypes} from '../../../redux/actions/ActionTypes';
import {makeAction} from '../../../redux/actions/ActionCreator';

class BeerDetails extends React.Component {

    componentDidMount() {
        const {match, getBeer, beer} = this.props;

        if (!beer) {
            getBeer(match.params.id);
        }
    }

    render() {

        const {beer} = this.props;

        return (
            <div>
                {
                    beer
                        ? (
                            <div className={styles['beer-details__container']}>
                                <BeerWithDescription beer={beer} />
                                <SimilarBeers beer={beer} />
                            </div>
                        )
                        : <Spinner />
                }
            </div>

        );
    }
}

BeerDetails.propTypes = {
    getBeer: PropTypes.func.isRequired,
    beer: PropTypes.object
};

BeerDetails.defaultProps = {
    beer: null
};

const mapStateToProps = (state, ownProps) => ({
    beer: state.beers.get((ownProps.match && +ownProps.match.params.id) || ownProps.beerId)
});

const mapDispatchToProps = {
    getBeer: makeAction(ActionTypes.beers.GET_BEER)
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);
