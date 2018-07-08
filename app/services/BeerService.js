class BeerService {

    constructor() {
        this.API_CONSTS = {
            ROOT_ENDPOINT: 'https://api.punkapi.com/v2/beers',
            BEERS_PER_PAGE: 20
        };
    }

    getBeers(page, beersPerPage) {
        return fetch(`${this.API_CONSTS.ROOT_ENDPOINT}?page=${page}&per_page=${beersPerPage}`);
    }

    getMoreBeers(page) {
        return this.getBeers(page, this.API_CONSTS.BEERS_PER_PAGE);
    }

}

export default new BeerService();