import { Response, Request, NextFunction } from 'express';

interface asyncHandlerI {
    (req: Request, res: Response, next: NextFunction): Promise<Response>
}

export default asyncHandlerI;
