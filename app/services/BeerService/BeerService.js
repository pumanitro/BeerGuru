import {Consts} from '../../Constants';

class BeerService {

    constructor() {
        this.API_CONSTS = {
            ROOT_ENDPOINT: 'https://api.punkapi.com/v2/beers',
            BEERS_PER_PAGE: Consts.BEERS_PER_PAGE,
            MAX_BEERS_PER_PAGE: 80,
            SUPPORTED_OPTIONS: {
                PAGE: 'page',
                PER_PAGE: 'per_page',
                ABV_GT: 'abv_gt',
                ABV_LT: 'abv_lt',
                IBU_GT: 'ibu_gt',
                IBU_LT: 'ibu_lt',
                EBC_GT: 'ebc_gt',
                EBC_LT: 'ebc_lt'
            }
        };
    }

    generatePunkApiEndpoint = (options) => {

        let params = '';

        Object.keys(options).forEach((optionKey) => {
            params += `${optionKey}=${options[optionKey]}&`;
        });

        if (params.length === 0) {
            return this.API_CONSTS.ROOT_ENDPOINT;
        }

        params = params.slice(0, -1);

        return `${this.API_CONSTS.ROOT_ENDPOINT}?${params}`;
    };

    getBeers = (page, beersPerPage) => {
        return fetch(this.generatePunkApiEndpoint({
            [this.API_CONSTS.SUPPORTED_OPTIONS.PAGE]: page,
            [this.API_CONSTS.SUPPORTED_OPTIONS.PER_PAGE]: beersPerPage
        }))
            .then((resp) => {
                return resp.json();
            })
            .catch(() => {
                console.error(`Can't get beer page with page set to ${page} and beersPer page to ${beersPerPage}`);
            });
    };

    getMoreBeers = (page) => {
        return this.getBeers(page, this.API_CONSTS.BEERS_PER_PAGE);
    };

    getSimilarBeers = (beer) => {

        return fetch(this.generatePunkApiEndpoint({
            [this.API_CONSTS.SUPPORTED_OPTIONS.ABV_GT]: Math.floor(beer.abv),
            [this.API_CONSTS.SUPPORTED_OPTIONS.ABV_LT]: Math.ceil(beer.abv),
            [this.API_CONSTS.SUPPORTED_OPTIONS.PER_PAGE]: this.MAX_BEERS_PER_PAGE
        }))
            .then((resp) => {
                return resp.json();
            })
            .catch(() => {
                console.error(`Can't get beer with abv from ${Math.floor(beer.abv)} to ${Math.ceil(beer.abv)}`);
            });

    }

}

export default new BeerService();
