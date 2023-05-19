import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();

app.use([express.json()], cors(), morgan('dev'), routes);

export default app;
