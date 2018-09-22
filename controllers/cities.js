const cities = require( '../libs/cities' )
    , controller = {};

controller.get = async (req, res, next) => {
    const citiesData = req.query.hasWeather === undefined ? cities.findAll() : cities.findWithWeather().all();

    res.json(citiesData);
};

controller.getById = async (req, res, next) => {
    const id = parseInt( req.params.id );
    let city;

    if ( req.query.withWeather === undefined ) {
        city = cities.findById( id );
    }

    if ( req.query.withWeather !== undefined ) {
        const params = {};

        if ( req.query.startDate !== undefined ) {
            params.startDate = req.query.startDate;
        }

        if ( req.query.endDate !== undefined ) {
            params.endDate = req.query.endDate;
        }

        try {
            city = cities.findWithWeather( params ).byId( id );
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if ( city !== undefined ) {
        res.json( city );
    } else {
        res.status(404).json({ error: 'not found' });
    }
};

module.exports = controller;