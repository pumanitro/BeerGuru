import {
    takeEvery, call, put, select
} from 'redux-saga/effects';

import {ActionTypes} from '../actions/ActionTypes';
import BeerService from '../../services/BeerService/BeerService';
import {Consts} from '../../Constants';

function* getMoreBeers() {

    try {

        const beers = yield select(state => state.beers);

        const beerPage = Math.floor(beers.size / Consts.BEERS_PER_PAGE) + 1;

        const moreBeers = yield call(BeerService.getMoreBeers, beerPage);

        // Initializing future possibility of fetching beer detail.
        moreBeers.forEach((beer) => {
            beer.similarBeers = {
                areFetched: false
            };
        });

        yield put({
            type: ActionTypes.beers.GET_MORE_BEERS_SUCCEEDED,
            payload: moreBeers
        });

    }
    catch (e) {
        console.error("Can't get more beers");
    }

}

function* getSimilarBeers(action) {
    try {

        const beer = action.payload;

        const similarBeers = yield call(BeerService.getSimilarBeers, beer);

        yield put({
            type: ActionTypes.beers.GET_SIMILAR_BEERS_SUCCEEDED,
            payload: {
                similarBeers,
                beer
            }
        });
    }
    catch (e) {
        console.error("Can't get similar beers");
    }
}

function* getBeer(action) {
    try {

        const beerId = action.payload;

        const newBeer = yield call(BeerService.getBeer, beerId);

        yield put({
            type: ActionTypes.beers.GET_BEER_SUCCEEDED,
            payload: newBeer
        });
    }
    catch (e) {
        console.error("Can't get one, given beer");
    }
}

export function* watchGetMoreBeers() {
    yield takeEvery(ActionTypes.beers.GET_MORE_BEERS, getMoreBeers);
}

export function* watchGetSimilarBeers() {
    yield takeEvery(ActionTypes.beers.GET_SIMILAR_BEERS, getSimilarBeers);
}

export function* watchGetBeer() {
    yield takeEvery(ActionTypes.beers.GET_BEER, getBeer);
}
