/* eslint-disable consistent-return */
import { Response, Request, NextFunction } from 'express';
import asyncHandlerI from '../types/asyncHandlerI';

const asyncHandler = (callBack: asyncHandlerI) => async (req: Request,
  res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await callBack(req, res, next);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'internal server error',
      data: err,
    });
  }
};

export default asyncHandler;
