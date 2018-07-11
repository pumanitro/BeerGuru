import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './BeerDetails.scss';
import SimilarBeers from './SimilarBeers/SimilarBeers';
import BeerWithDescription from './BeerWithDescription/BeerWithDescription';
import Spinner from '../common/Spinner/Spinner';

class BeerDetails extends React.Component {

    componentDidMount() {
        const {match} = this.props;

        console.warn(match.params.id);

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
    beer: PropTypes.object
};

BeerDetails.defaultProps = {
    beer: null
};

const mapStateToProps = (state, ownProps) => ({
    beer: state.beers.get(ownProps.match.params.id || ownProps.beerId)
});

export default connect(mapStateToProps, null)(BeerDetails);
