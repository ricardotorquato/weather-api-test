const cities = require( '../libs/cities' )
    , controller = {};

controller.get = async (req, res, next) => {
    res.json(cities.findAll());
};
controller.getById = async (req, res, next) => next('getById not implemented yet');
controller.getByIdWithWeather = async (req, res, next) => next('getByIdWithWeather not implemented yet');

module.exports = controller;