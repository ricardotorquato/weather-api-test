const router = require( 'express' ).Router()
    , cities = require( '../controllers' ).cities;

router.get('/weather/:id', cities.getWeatherById);
router.get('/weather', cities.getWeather);
router.get('/:id', cities.getById);
router.get('/', cities.get);

module.exports = router;