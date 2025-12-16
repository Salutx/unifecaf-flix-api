import express from 'express';
import cors from 'cors';
import filmeRoutes from './routes/FilmeRoutes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.use(cors());
app.use(express.json());

app.use('/v1/controle-filmes', filmeRoutes);

export default app;