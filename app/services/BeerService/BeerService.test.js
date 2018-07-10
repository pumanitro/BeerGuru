import BeerService from './BeerService';
import {mockedBeer} from './mockedBeer';

describe('BeerService', () => {

    it('should return URL endpoint for given options with page and per_page parameters set', () => {
        expect(BeerService.generatePunkApiEndpoint({
            [BeerService.API_CONSTS.SUPPORTED_OPTIONS.PAGE]: 2,
            [BeerService.API_CONSTS.SUPPORTED_OPTIONS.PER_PAGE]: 20
        })).toBe(`${BeerService.API_CONSTS.ROOT_ENDPOINT}?page=2&per_page=20`);
    });

    it('should return URL endpoint for given options with ABV_GT = 2 and ABV_LT = 3 parameters set', () => {
        expect(BeerService.generatePunkApiEndpoint({
            [BeerService.API_CONSTS.SUPPORTED_OPTIONS.ABV_GT]: 2,
            [BeerService.API_CONSTS.SUPPORTED_OPTIONS.ABV_LT]: 3
        })).toBe(`${BeerService.API_CONSTS.ROOT_ENDPOINT}?abv_gt=2&abv_lt=3`);
    });
});
