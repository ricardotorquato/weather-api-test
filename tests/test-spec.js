const mockery = require( 'mockery' );

before( () => {
    mockery.enable({
        warnOnUnregistered: false
    });

    mockery.registerMock('../data/city_list.json', require( './mock_data/cities.json' ));
    mockery.registerMock('../data/weather_list.json', require( './mock_data/weather.json' ));
});

after( () => { mockery.disable(); } );