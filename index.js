import express from 'express';

const PORT = 8000;

console.log('Starting server');

const app = express();

console.log('App created');

console.log('Middleware loaded');

app.get( '/', ( req, res ) => {
  res.send( 'hello world' );
} );

console.log('Routes loaded');

app.listen( PORT );
console.log(`Listening on ${PORT}`);
