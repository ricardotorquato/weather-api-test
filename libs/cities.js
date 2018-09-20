const data = require( '../data/city_list.json' )
    , cities = {};

cities.findAll = () => data;
cities.findById = (id) => data.filter( city => city.id === id )[0];

module.exports = cities;