import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.scss';
import {makeAction} from '../redux/actions/ActionCreator';
import {ActionTypes} from '../redux/actions/ActionTypes';
import BeersList from './BearList/BeersList';
import BeerModal from './BeerModal/BeerModal';

const MainPage = ({getMoreBeers, beers}) => {

    const loadMoreBeers = () => {
        getMoreBeers();
    };

    return (
        <div>
            <BeerModal />
            <h1>BeerGuru</h1>
            <div className={styles['infinite__container']}>
                <InfiniteScroll
                    loadMore={loadMoreBeers}
                    hasMore={true || false}
                    threshold={100}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <BeersList beers={beers} />
                </InfiniteScroll>
            </div>
        </div>
    );
};

MainPage.propTypes = {
    getMoreBeers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    beers: state.beers
});

const mapDispatchToProps = {
    getMoreBeers: makeAction(ActionTypes.beers.GET_MORE_BEERS)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
