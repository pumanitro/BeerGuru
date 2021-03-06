import {ActionTypes} from '../actions/ActionTypes';

export function beerModal(state = {
    beerId: 1,
    isShown: false
}, action) {
    switch (action.type) {
    case ActionTypes.beerModal.OPEN_BEER_MODAL:
        return {
            isShown: true,
            beerId: action.payload
        };

    case ActionTypes.beerModal.CLOSE_BEER_MODAL:
        return {
            ...state,
            isShown: false
        };

    default:
        return state;

    }
}
