const assert = require( 'chai' ).assert
    , mockery = require( 'mockery' );

let controller;

before( () => {
    mockery.enable({
        warnOnUnregistered: false
    });

    mockery.registerMock('../data/city_list.json', require( '../mock_data/cities.json' ));
    mockery.registerMock('../data/weather_list.json', require( '../mock_data/weather.json' ));

    controller = require( '../../controllers' ).cities;
});

after( () => { mockery.disable(); } );

describe('Testing cities controller', function () {
    describe('Testing get method', function () {
        it('should return a valid json', function () {
            
        });

        it('should returns all cities', function () {
            
        });

        it('should allow filter to retrieve just the cities that has weather information', function () {
            
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

        it('should return 500 error when the dates params have invalid value', function () {
            
        });
    });
});