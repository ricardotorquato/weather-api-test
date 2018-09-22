const assert = require( 'chai' ).assert
    , mockery = require( 'mockery' )
    , request = require( 'supertest' );

let app;

before( () => {
    mockery.enable({
        warnOnUnregistered: false
    });

    mockery.registerMock('../data/city_list.json', require( '../mock_data/cities.json' ));
    mockery.registerMock('../data/weather_list.json', require( '../mock_data/weather.json' ));

    app = require( '../../app' );
});

after( () => { mockery.disable(); } );

describe('Testing cities controller', function () {
    describe('Testing get method', function () {
        it('should return a valid json', function (done) {
            request(app)
                .get('/api/v1/cities')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('should returns all cities', function (done) {
            request(app)
                .get('/api/v1/cities')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(res.body.length, 3)
                })
                .expect(200, done);
        });

        it('should returns all cities that fits the filter by coordinates', function (done) {
            request(app)
                .get('/api/v1/cities?latitude=19.85148&longitude=-90.52724&km=5')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(res.body.length, 1)
                })
                .expect(200, done);
        });

        it('should allow filter to retrieve just the cities that has weather information', function (done) {
            request(app)
                .get('/api/v1/cities?hasWeather')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(res.body.length, 2)
                })
                .expect(200, done);
        });

        it('should allow filter to retrieve just the cities that has weather information and fits the filter by coordinates', function (done) {
            request(app)
                .get('/api/v1/cities?hasWeather&latitude=19.85148&longitude=-90.52724&km=5')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(res.body.length, 1)
                })
                .expect(200, done);
        });
    });

    describe('Testing getById method', function () {
        it('should return a valid json', function (done) {
            request(app)
                .get('/api/v1/cities/123')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('should return a city', function (done) {
            request(app)
                .get('/api/v1/cities/123')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(typeof(res.body), 'object')
                })
                .expect(200, done);
        });

        it('should return a city with its weather', function (done) {
            request(app)
                .get('/api/v1/cities/123?withWeather')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(typeof(res.body), 'object', 'it\'s not a city');
                    assert.equal(typeof(res.body.weather), 'object', 'it doesn\'t have a weather object');
                })
                .expect(200, done);
        });

        it('should allow filters by date and retrieve the weather information based on that filter', function (done) {
            request(app)
                .get('/api/v1/cities/123?withWeather&startDate=2017-03-12&endDate=2017-03-21')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(res => {
                    assert.equal(typeof(res.body), 'object', 'it\'s not a city');
                    assert.equal(typeof(res.body.weather), 'object', 'it doesn\'t have a weather object');
                    assert.equal(res.body.weather.length, 9);
                })
                .expect(200, done);
        });

        it('should return 404 when there is no city with the id', function (done) {
            request(app)
                .get('/api/v1/cities/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(404, done);
        });

        it('should return 500 error when the dates params have invalid value', function (done) {
            request(app)
                .get('/api/v1/cities/123?withWeather&startDate=2017-03-32&endDate=2017-03-35')
                .set('Accept', 'application/json')
                .expect(500, done)
        });

        it('should return 500 error when the start date is greather than end date', function (done) {
            request(app)
                .get('/api/v1/cities/123?withWeather&startDate=2017-03-21&endDate=2017-03-12')
                .set('Accept', 'application/json')
                .expect(500, done)
        });
    });
});