const cities = require( '../libs/cities' )
    , controller = {};

controller.get = async (req, res, next) => {
    const citiesData = req.query.hasWeather === undefined ? cities.findAll() : cities.findWithWeather().all();

    res.json(citiesData);
};

controller.getById = async (req, res, next) => { throw new Error('getById not implemented yet') };

module.exports = controller;