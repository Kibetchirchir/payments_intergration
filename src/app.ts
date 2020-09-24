import { errors } from 'celebrate';
import express, { Request, Response } from 'express';
import joiErrors from './middlewares/joi-error';
import api from './resources/api';

const app = express();

app.use(express.json());

app.use(joiErrors);

app.use('/api', api);

app.get('/', (req: Request, res: Response): Response => res.status(200).send({ message: 'hello world' }));

export default app;
