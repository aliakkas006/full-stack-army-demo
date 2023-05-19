import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/health', (_req, res) => {
  res.send(`<h2>Everything is OK!<h2>`);
});

export default app;
