export const ActionTypes = {
    beers: {
        GET_MORE_BEERS: 'GET_MORE_BEERS',
        GET_MORE_BEERS_SUCCEEDED: 'GET_MORE_BEERS_SUCCEEDED',
        GET_MORE_BEERS_FAILED: 'GET_MORE_BEERS_FAILED',

        GET_BEER: 'GET_BEER',
        GET_BEER_SUCCEEDED: 'GET_BEER_SUCCEEDED',
        GET_BEER_FAILED: 'GET_BEER_FAILED',

        GET_SIMILAR_BEERS: 'GET_SIMILAR_BEERS',
        GET_SIMILAR_BEERS_SUCCEEDED: 'GET_SIMILAR_BEERS_SUCCEEDED',
        GET_SIMILAR_BEERS_FAILED: 'GET_SIMILAR_BEERS_FAILED',

        STOP_TAKING_MORE_BEERS: 'STOP_TAKING_MORE_BEERS'
    },

    beerModal: {
        OPEN_BEER_MODAL: 'OPEN_BEER_MODAL',
        CLOSE_BEER_MODAL: 'CLOSE_BEER_MODAL'
    }
};

Object.freeze(ActionTypes);
