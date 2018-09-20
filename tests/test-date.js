/*
 * This test is for the date module
 */

const date = require( '../libs/date' )
    , chai = require('chai')
    , assert = chai.assert;

describe('Testing functions for date validation', function () {
    it('should return true because the date is valid', function () {
        assert.isTrue( date.isValid('2018-09-19') );
      });

    it('should return false because the date is invalid', function () {
        assert.isFalse( date.isValid('2018-09-32') );
      });

    it('should throw error because of invalid date format', function () {
        assert.throw( date.isValid('19/09/2018') );
      });
});

describe('Testing functions for date conversion', function () {
    it('should return the timestamp value of the date', function () {
        assert.equal( date.isValid('2018-09-19'), 1568862000 );
      });
    
    it('should throw error because of invalid date value', function () {
        assert.throws( () => date.isValid('2018-09-32') );
      });
    
    it('should throw error because of invalid date format', function () {
        assert.throws( () => date.isValid('19/09/2018') );
      });
});