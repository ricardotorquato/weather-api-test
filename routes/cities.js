const router = require( 'express' ).Router()
    , cities = require( '../controllers' ).cities;

router.get('/:id', cities.getById);
router.get('/', cities.get);

module.exports = router;