import { Router } from 'express';
import asyncHandler from '../../../../middlewares/asyncHandler';
import checkAuth from '../../../../middlewares/checkAuth';
import PaymentController from './payments.controller';

const router = Router();

router.post('/initiate_payments', checkAuth, asyncHandler(PaymentController.initiateCashIn));

export default router;
