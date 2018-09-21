const router = require( '../../routes' )
    , expect = require( 'chai' ).expect
    , httpMocks = require( 'node-mocks-http' );

// Useful functions
const buildResponse = () => httpMocks.createResponse({eventEmitter: require('events').EventEmitter})
    , errorNotExpected = (err) => { expect( err ).to.not.exist(); };

describe('Testing get method', function () {
    it('should returns all cities', function () {
        const response = buildResponse();

        const request = httpMocks.createRequest({
            method: 'GET',
            url: '/v1/cities'
        });

        response.on( 'end', () => {
            expect(response._getData()).to.be.equal( require('../mock_data/cities.json') );
            done();
        });

        router.handle(request, response, errorNotExpected);
    });
});