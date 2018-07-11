import {ActionTypes} from '../actions/ActionTypes';

export function shouldTakeMoreBeers(state = true, action) {
    switch (action.type) {
    case ActionTypes.beers.STOP_TAKING_MORE_BEERS:
        return false;

    default:
        return state;

    }
}
