/*
 * This test is for the weather module
 */

const chai = require('chai')
    , assert = chai.assert
    , mockery = require( 'mockery' );

let weather;

before( () => {
    mockery.enable({
        warnOnUnregistered: false
    });

    mockery.registerMock('../data/weather_list.json', require( '../mock_data/weather.json' ));

    weather = require( '../../libs/weather' );
});

after( () => { mockery.disable(); } );

describe('Testing retrieving data from weather module', function () {
    it('should retrieve all weather information of a city', function () {
        assert.equal( weather.findByCityId(3992619).length, 16 );
      });

    it('should not find information with this id', function () {
        assert.equal( weather.findByCityId(1).length, 0 );
      });
    
    it('should not find information with a string as id', function () {
        assert.equal( weather.findByCityId('3992619'), 0 );
      });

    it('should allow start and end date to filter the weather information', function () {
        const params = { 
            startDate : '2017-03-12', 
            endDate   : '2017-03-21'
        };
        assert.equal( weather.findByCityId(3992619, params).length, 9 );
      });
    
    it('should throws errors on invalid date format', function () {
        const params = { 
            startDate : '12/03/2017', 
            endDate   : '21/03/2017'
        };
        assert.throws( () => weather.findByCityId(3992619, params) );
      });
    
    it('should throws errors on invalid date value', function () {
        const params = { 
            startDate : '2017-03-32', 
            endDate   : '2017-04-32'
        };
        assert.throws( () => weather.findByCityId(3992619, params) );
      });
    
    it('should return a list of cities ids avaiables', function () {
        assert.equal( weather.getAllCitiesId().length, 2 );
      });
});