import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MainPage.scss';
import {makeAction} from '../redux/actions/ActionCreator';
import {ActionTypes} from '../redux/actions/ActionTypes';

const MainPage = ({getMoreBeers}) => {

    const loadMoreBeers = () => {
        getMoreBeers();
    };

    return (
        <div>
            <h1>Beer App</h1>
            <div className={styles['infinite__container']}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMoreBeers}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                >
                    <div> test </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

MainPage.propTypes = {
    getMoreBeers: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    getMoreBeers: makeAction(ActionTypes.beers.GET_MORE_BEERS)
};

export default connect(null, mapDispatchToProps)(MainPage);
