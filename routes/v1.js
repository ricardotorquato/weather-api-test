const router = require( 'express' ).Router();

router.use( '/cities', require('./cities') );

module.exports = router;