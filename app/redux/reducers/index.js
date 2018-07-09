import { combineReducers } from 'redux';
import {beers} from './beersReducer';
import {beerModal} from './beerModalReducer';

export default combineReducers({
    beers,
    beerModal
});

