/*
 * This test is for the cities module
 */

const cities = require( '../cities' )
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