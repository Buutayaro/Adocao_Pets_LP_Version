import express from 'express';
import morgan from 'morgan';
import router from './routes.js';
import Pet from './database/Pets.js';

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static('public'));

app.use(router);

Pet.loadSeed();

app.listen(3000, () => console.log('Server is running!'));