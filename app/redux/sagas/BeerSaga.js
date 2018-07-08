import {takeEvery} from 'redux-saga/effects';
import {ActionTypes} from '../actions/ActionTypes';
import BeerService from '../../services/BeerService';

function* getMoreBeers() {

    try {

        BeerService.test();

    }
    catch (e) {
        console.error("Can't get more beers");
    }

}

export function* watchGetMoreBeers() {
    yield takeEvery(ActionTypes.beers.GET_MORE_BEERS, getMoreBeers);
}
