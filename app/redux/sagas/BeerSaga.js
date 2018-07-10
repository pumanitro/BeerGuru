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

        yield put({
            type: ActionTypes.beers.GET_MORE_BEERS_SUCCEEDED,
            payload: moreBeers
        });

    }
    catch (e) {
        console.error("Can't get more beers");
    }

}

export function* watchGetMoreBeers() {
    yield takeEvery(ActionTypes.beers.GET_MORE_BEERS, getMoreBeers);
}
