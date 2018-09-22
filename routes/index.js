const router = require( 'express' ).Router();

router.use( '/api/v1', require('./v1') );
router.use( '/doc', require('./doc') );

module.exports = router;