import express, { Request, Response} from 'express';
import api from './resources/api';

const app = express();

app.use(express.json());

app.use('/api', api);

app.get('/', (req: Request, res: Response): Response => {
    return res.status(200).send({message: "hello world"})
});

export default app;
