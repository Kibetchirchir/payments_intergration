import { Response } from 'express';

interface jsonResponseI{
    status: number;
    message: string,
    data: Array<{}> | null;
    error: string | null;
    res: Response
}

export default jsonResponseI;
