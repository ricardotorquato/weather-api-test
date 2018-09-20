/*
 * This test is for the weather module
 */

const weather = require( '../libs/weather' )
    , chai = require('chai')
    , assert = chai.assert;

describe('Testing retrieving data from weather module', function () {
    it('should retrieve all weather information of a city', function () {
        assert.equal( weather.findByCityId(3992619).length, 16 );
      });

    it('should not find information with this id', function () {
        assert.notExists( weather.findByCityId(1) );
      });
    
    it('should not find information with a string as id', function () {
        assert.notExists( weather.findByCityId('3992619') );
      });

    it('should allow start and end date to filter the weather information', function () {
        assert.equal( weather.findByCityId(3992619, '2017-03-12', '2017-03-21').length, 9 );
      });
    
    it('should throws errors on invalid date format', function () {
        assert.throws( () => weather.findByCityId(3992619, '12/03/2017', '21/03/2017') );
      });
    
    it('should throws errors on invalid date value', function () {
        assert.throws( () => weather.findByCityId(3992619, '2017-03-32', '2017-04-32') );
      });
});