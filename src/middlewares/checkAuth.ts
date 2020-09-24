import { Response, Request, NextFunction } from 'express';

const checkAuth = async (req: Request,
  res: Response,
  // eslint-disable-next-line consistent-return
  next: NextFunction): Promise<Response | void> => {
  const token = req.headers.authorization;

  if (token !== process.env.TOKEN) {
    return res.status(401).json({
      message: 'Unauthorised',
    });
  }
  next();
};

export default checkAuth;
