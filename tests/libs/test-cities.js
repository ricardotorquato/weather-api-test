/*
 * This test is for the cities module
 */

const cities = require( '../../libs/cities' )
    , chai = require('chai')
    , assert = chai.assert;

describe('Testing retrieving data from cities module', function () {
    it('should retrieve all the cities of the city_list.json file', function () {
        assert.equal( cities.findAll().length, 48 );
      });

    it('should retrieve the Campeche city of the city_list.json', function () {
        assert.equal( cities.findById(3531732).name, "Campeche" );
      });

    it('should not find any city with this id', function () {
        assert.notExists( cities.findById(1) );
      });
    
    it('should not find any city with a string as id', function () {
        assert.notExists( cities.findById('3531732') );
      });
});

describe('Testing retrieving data from cities related to weather', function () {
    it('should retrieve only the cities with weather informed and their weather information', function () {
        const data = cities.findWithWeather().all();
        
        // We should have two cities with weather
        assert.equal( data.length, 2 );
        
        // Both should have the "weather" node
        assert.equal( data.filter( d => typeof(d.weather) === 'object').length, 2 );
      });
  
    it('should retrieve only the cities with weather informed and their weather information filtered by range of date', function () {
          const params = { 
              startDate : '2017-03-12', 
              endDate   : '2017-03-21'
          };

          const data = cities.findWithWeather(params).all();

          // We should still have two cities with weather
          assert.equal( data.length, 2 );
        
          // Both should have the "weather" node
          assert.equal( data.filter( d => typeof(d.weather) === 'object').length, 2 );

          // The weather node filtered should have less items
          assert.equal( data.filter( d => d.weather.length === 9 ).length, 2 );
      });
    
    it('should retrieve just one city with its weather information', function () {
        const city = cities.findWithWeather().byId(3992619);

        assert.exists( city.weather );
      });
    
    it('should retrieve just one city with its weather information filtered by a range of dates', function () {
        const params = { 
            startDate : '2017-03-12', 
            endDate   : '2017-03-21'
        };

        const city = cities.findWithWeather(params).byId(3992619);

        assert.exists( city );
        assert.exists( city.weather );
        assert.equal( city.weather.length, 9 );
      });
    
    it('should throws error because of invalid date format', function () {
        const params = { 
            startDate : '12/03/2017', 
            endDate   : '21/03/2017'
        };

        assert.throws( () => cities.findWithWeather(params).all() );
      });

    it('should throws error because of invalid date value', function () {
        const params = { 
            startDate : '2017-03-32', 
            endDate   : '2017-03-32'
        };

        assert.throws( () => cities.findWithWeather(params).all() );
      });
});