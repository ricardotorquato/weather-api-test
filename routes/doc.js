const router = require( 'express' ).Router()
    , swaggerUi = require( 'swagger-ui-express' )
    , swaggerDocument = require( '../data/swagger.json' );

router.use( '/', swaggerUi.serve, swaggerUi.setup( swaggerDocument ) );

module.exports = router;