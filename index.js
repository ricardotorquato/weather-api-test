const http = require( 'http' )
    , app = require( 'app' );

const port = process.env.PORT || 3000;
http.createServer(app).listen(port, () => console.log(`Okay! We are working on port ${port}`));

