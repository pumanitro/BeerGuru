import {all} from 'redux-saga/effects';
import {watchGetMoreBeers} from './BeerSaga';

export default function* RootSaga() {
    yield all([
        watchGetMoreBeers()
    ]);
}
