const http = require( 'http' )
    , app = require( 'express' )()
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

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => console.log(`Okay! We are working on port ${port}`));

