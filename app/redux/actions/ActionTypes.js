export const ActionTypes = {
    beers: {
        GET_MORE_BEERS: 'GET_MORE_BEERS',
        GET_MORE_BEERS_SUCCEEDED: 'GET_MORE_BEERS_SUCCEEDED',
        GET_MORE_BEERS_FAILED: 'GET_MORE_BEERS_FAILED'
    },

    beerModal: {
        OPEN_BEER_MODAL: 'OPEN_BEER_MODAL',
        CLOSE_BEER_MODAL: 'CLOSE_BEER_MODAL'
    }
};

Object.freeze(ActionTypes);
