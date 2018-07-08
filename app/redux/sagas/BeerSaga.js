import {takeEvery, call, put} from 'redux-saga/effects';
import {ActionTypes} from '../actions/ActionTypes';
import BeerService from '../../services/BeerService';

function* getMoreBeers() {

    try {

        const moreBeers = yield call(BeerService.getMoreBeers, 1);

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
