//Install express server
const express = require( 'express' );
const http = require( 'http' );
const enforce = require( 'express-sslify' );
const compression = require( 'compression' );

// webserver
const app = express();

app.use( compression() );

app.use( enforce.HTTPS( { trustProtoHeader: true } ) );
app.use( express.static( __dirname + '/dist/svn-commands' ) );
app.get( '/*', ( req, res ) => {
    res.sendFile( __dirname + '/dist/svn-commands/index.html' );
} );

// socketserver
const port = process.env.PORT || 8080;
const server = http.Server( app );

server.listen( port, () => {
    console.log( `listening on port: ${port}` );
} );