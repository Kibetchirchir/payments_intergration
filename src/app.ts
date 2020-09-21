import express, { Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response): Response => {
    return res.status(200).send({message: "hello world"})
});

export default app;
