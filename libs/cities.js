const data = require( '../data/city_list.json' )
    , cities = {};

cities.findAll = () => data;
cities.findById = (id) => data.filter( city => city.id === id )[0];

cities.findWithWeather = (params = {}) => {
    const find = {};

    find.all = () => [];
    find.byId = (id) => null;

    return find;
}

module.exports = cities;