import {Consts} from '../../Constants';

class BeerService {

    constructor() {
        this.API_CONSTS = {
            ROOT_ENDPOINT: 'https://api.punkapi.com/v2/beers',
            BEERS_PER_PAGE: Consts.BEERS_PER_PAGE,
            MAX_BEERS_PER_PAGE: 80,
            TOLERANCE: {
                ABV: 0,
                IBU: 10,
                EBC: 5
            },
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

    findBestBeerMatch = (retrievedBeers, beer, indicator) => {
        if (retrievedBeers.length <= 1) {
            return null;
        }

        // Little complicated but reduced amount of iteration
        const startDifference = Math.abs(retrievedBeers[0].id === beer.id ? retrievedBeers[1][indicator] : retrievedBeers[0][indicator] - beer[indicator]);

        const bestMatchIndex = retrievedBeers.reduce((accumulator, retrievedBeer, index) => {
            const actualDifference = Math.abs(retrievedBeer[indicator] - beer[indicator]);

            if (retrievedBeer.id !== beer.id && accumulator.difference > actualDifference) {
                return {
                    difference: actualDifference,
                    profileIndex: index
                };
            }

            return accumulator;
        }, {
            difference: startDifference,
            profileIndex: 0
        }).profileIndex;

        return retrievedBeers[bestMatchIndex];

    };

    // That logic should be on the beckend side
    getSimilarBeerBy = (indicator, beer) => {

        const endpointOptions = {
            [this.API_CONSTS.SUPPORTED_OPTIONS.PER_PAGE]: this.API_CONSTS.MAX_BEERS_PER_PAGE
        };

        if (indicator === 'abv') {
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.ABV_GT] = Math.floor(beer.abv) - this.API_CONSTS.TOLERANCE.ABV;
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.ABV_LT] = Math.ceil(beer.abv) + this.API_CONSTS.TOLERANCE.ABV;
        }
        else if (indicator === 'ibu') {
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.IBU_GT] = Math.floor(beer.ibu) - this.API_CONSTS.TOLERANCE.IBU;
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.IBU_LT] = Math.ceil(beer.ibu) + this.API_CONSTS.TOLERANCE.IBU;
        }
        else if (indicator === 'ebc') {
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.EBC_GT] = Math.floor(beer.ebc) - this.API_CONSTS.TOLERANCE.EBC;
            endpointOptions[this.API_CONSTS.SUPPORTED_OPTIONS.EBC_LT] = Math.ceil(beer.ebc) + this.API_CONSTS.TOLERANCE.EBC;
        }

        return fetch(this.generatePunkApiEndpoint({...endpointOptions}))
            .then(async (resp) => {

                const retrievedBeers = await resp.json();

                return this.findBestBeerMatch(retrievedBeers, beer, indicator);
            })
            .catch(() => {
                console.error(`Can't get similar beer by ${indicator} for beer with id ${beer.id}`);
            });

    };

    getSimilarBeers = async (beer) => {

        const abvBeer = await this.getSimilarBeerBy('abv', beer);
        const ibuBeer = await this.getSimilarBeerBy('ibu', beer);
        const ebcBeer = await this.getSimilarBeerBy('ebc', beer);

        return {
            abvBeer,
            ibuBeer,
            ebcBeer
        };

    }

}

export default new BeerService();
