import express from 'express';
import routes from './routes';

const PORT = 8000;

console.log('Starting server');

const app = express();

console.log('App created');

console.log('Middleware loaded');

app.use( '/', routes );

console.log('Routes loaded');

app.listen( PORT );
console.log(`Listening on ${PORT}`);
