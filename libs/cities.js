const data = require( '../data/city_list.json' )
    , weather = require( './weather' )
    ,cities = {};

cities.findAll = () => data;
cities.findById = id => data.filter( city => city.id === id )[0];

cities.findWithWeather = (params = {}) => {
    const find = {};

    // Getting the ids of cities that has weather information
    const citiesId = weather.getAllCitiesId();
    // This function receives an id list and returns another function to filter using this list
    filterByCitiesIdsFn = ids => d => ids.indexOf(d.id) > -1;
    // Applying the filter
    const myData = data.filter(filterByCitiesIdsFn(citiesId));

    find.all = () => myData;

    find.byId = id => {
        const city = myData.filter( d => d.id === id)[0];

        if ( typeof(city) === 'object' ) {
            city.weather = weather.findByCityId(id, params);
        }

        return city;
    };

    return find;
}

module.exports = cities;