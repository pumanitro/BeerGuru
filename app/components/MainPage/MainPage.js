import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.scss';
import {makeAction} from '../../redux/actions/ActionCreator';
import {ActionTypes} from '../../redux/actions/ActionTypes';
import BeersList from './BearList/BeersList';
import BeerModal from '../BeerModal/BeerModal';
import Spinner from '../common/Spinner/Spinner';

const MainPage = ({getMoreBeers, beers, shouldTakeMoreBeers}) => {

    const loadMoreBeers = () => {
        getMoreBeers();
    };

    return (
        <div>
            <BeerModal />
            <h1>BEERGURU</h1>
            <div className={styles['infinite__container']}>
                <InfiniteScroll
                    loadMore={loadMoreBeers}
                    hasMore={shouldTakeMoreBeers}
                    threshold={100}
                    loader={<Spinner key={0} />}
                >
                    <BeersList beers={beers} />
                </InfiniteScroll>
            </div>
        </div>
    );
};

MainPage.propTypes = {
    getMoreBeers: PropTypes.func.isRequired,
    shouldTakeMoreBeers: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    beers: state.beers,
    shouldTakeMoreBeers: state.shouldTakeMoreBeers
});

const mapDispatchToProps = {
    getMoreBeers: makeAction(ActionTypes.beers.GET_MORE_BEERS)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
