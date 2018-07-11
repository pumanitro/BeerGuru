import { combineReducers } from 'redux';
import {beers} from './beersReducer';
import {beerModal} from './beerModalReducer';
import {shouldTakeMoreBeers} from './shouldTakeMoreBeersReducer';

export default combineReducers({
    beers,
    beerModal,
    shouldTakeMoreBeers
});

