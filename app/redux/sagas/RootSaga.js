import {all} from 'redux-saga/effects';
import {watchGetMoreBeers, watchGetSimilarBeers, watchGetBeer} from './BeerSaga';

export default function* RootSaga() {
    yield all([
        watchGetMoreBeers(),
        watchGetSimilarBeers(),
        watchGetBeer()
    ]);
}
