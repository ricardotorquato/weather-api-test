const cities = require( '../libs/cities' )
    , controller = {};

controller.get = async (req, res, next) => {
    const citiesData = req.query.hasWeather === undefined ? cities.findAll() : cities.findWithWeather().all();

    res.json(citiesData);
};

controller.getById = async (req, res, next) => {
    res.json( cities.findById( parseInt( req.params.id ) ) );
};

module.exports = controller;