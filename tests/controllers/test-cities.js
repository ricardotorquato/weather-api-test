const router = require( '../../routes' )
    , expect = require( 'chai' ).expect
    , httpMocks = require( 'node-mocks-http' );

// Useful functions
const buildResponse = () => httpMocks.createResponse({eventEmitter: require('events').EventEmitter})
    , errorNotExpected = (err) => { expect( err ).to.not.exist(); };

describe('Testing get method of cities controller', function () {
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
});