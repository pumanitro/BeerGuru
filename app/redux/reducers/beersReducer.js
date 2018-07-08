import {OrderedMap} from 'immutable';
import {ActionTypes} from '../actions/ActionTypes';

export function beers(state = OrderedMap(), action) {
    switch (action.type) {
    case ActionTypes.beers.GET_MORE_BEERS_SUCCEEDED:

        action.payload.forEach((newBeer) => {
            state = state.set(newBeer.id, newBeer);
        });

        return state;

    default:
        return state;

    }
}
