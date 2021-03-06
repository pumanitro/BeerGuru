import {OrderedMap} from 'immutable';
import {ActionTypes} from '../actions/ActionTypes';

export function beers(state = OrderedMap(), action) {
    switch (action.type) {
    case ActionTypes.beers.GET_MORE_BEERS_SUCCEEDED:

        action.payload.forEach((newBeer) => {
            state = state.set(newBeer.id, newBeer);
        });

        return state;

    case ActionTypes.beers.GET_BEER_SUCCEEDED: {

        const newBeer = action.payload;

        return state.set(newBeer.id, newBeer);
    }

    case ActionTypes.beers.GET_SIMILAR_BEERS_SUCCEEDED:

        state = state.set(action.payload.beer.id, {
            ...action.payload.beer,
            similarBeers: {
                ...action.payload.similarBeers,
                areFetched: true
            }
        });

        return state;

    default:
        return state;

    }
}
