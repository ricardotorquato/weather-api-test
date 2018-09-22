const expect = require( 'chai' ).expect
    , httpMocks = require( 'node-mocks-http' )
    , mockery = require( 'mockery' );

// Useful functions
const buildResponse = () => httpMocks.createResponse({eventEmitter: require('events').EventEmitter})
    , errorNotExpected = (err) => { expect( err ).to.not.exist(); };

let router;

before( () => {
    mockery.enable({
        warnOnUnregistered: false
    });

    mockery.registerMock('../data/city_list.json', require( '../mock_data/city.json' ));
    mockery.registerMock('../data/weather_list.json', require( '../mock_data/weather.json' ));

    router = require( '../../routes' );
});

after( () => { mockery.disable(); } );

describe('Testing cities controller', function () {
    describe('Testing get method', function () {
        it('should return a valid json', function () {
            const response = buildResponse();

            const request = httpMocks.createRequest({
                method: 'GET',
                url: '/v1/cities'
            });

            response.on( 'end', () => {
                expect( () => JSON.parse(response._getData()) ).to.not.throw();
            });

            router.handle(request, response, errorNotExpected);
        });

        it('should returns all cities', function () {
            const response = buildResponse();

            const request = httpMocks.createRequest({
                method: 'GET',
                url: '/v1/cities'
            });

            response.on( 'end', () => {
                expect(response._getData()).to.be.equal( JSON.stringify(require('../mock_data/city.json')) );
            });

            router.handle(request, response, errorNotExpected);
        });

        it('should allow filter to retrieve just the cities that has weather information', function () {

        });

        it('should return 500 error when weather param has invalid value', function () {

        });
    });

    describe('Testing getById method', function () {
        it('should return a valid json', function () {

        });

        it('should return a city', function () {

        });

        it('should return a city with its weather', function () {
            
        });

        it('should allow filters by date and retrieve the weather information based on that filter', function () {

        });

        it('should return 404 when there is no city with the id', function () {

        });

        it('should return 500 error when weather param has invalid value', function () {

        });

        it('should return 500 error when the dates params have invalid value', function () {

        });
    });
});