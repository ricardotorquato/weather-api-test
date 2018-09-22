const app = require( 'express' )()
    , bodyParser = require( 'body-parser' )
    , routes = require( './routes' );

app.use( bodyParser.json() );

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stackTrace: err.stack
    });
});

app.use( routes );

module.exports = app;