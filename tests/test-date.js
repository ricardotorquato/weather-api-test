/*
 * This test is for the date module
 */

const date = require( '../libs/date' )
    , chai = require('chai')
    , assert = chai.assert;

describe('Testing functions for date validation format', function () {
    it('should return true when the format is valid', function () {
        assert.isTrue( date.isFormatValid('2018-09-01'));
      });
    
    it('should return true when the format is valid even when the value is not', function () {
        assert.isTrue( date.isFormatValid('2018-09-32'));
      });
    
    it('should return false when the format is not valid', function () {
        assert.isFalse( date.isFormatValid('01/09/2018'));
      });

    it('should return false when the format is not even a date', function () {
        assert.isFalse( date.isFormatValid('Hello World'));
      });
});

describe('Testing functions for date validation value', function () {
    it('should return true because the date is valid', function () {
        assert.isTrue( date.isValid('2018-09-19') );
      });

    it('should return false because the date is invalid', function () {
        assert.isFalse( date.isValid('2018-09-32') );
      });

    it('should throw error because of invalid date format', function () {
        assert.throws( () => date.isValid('19/09/2018') );
      });
});

describe('Testing functions for date conversion', function () {
    it('should return the timestamp value of the date', function () {
        assert.equal( date.toTimestamp('2019-09-19'), 1568851200 );
      });
    
    it('should throw error because of invalid date value', function () {
        assert.throws( () => date.toTimestamp('2018-09-32') );
      });
    
    it('should throw error because of invalid date format', function () {
        assert.throws( () => date.toTimestamp('19/09/2018') );
      });
});