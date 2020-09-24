import { Router } from 'express';
import asyncHandler from '../../../../middlewares/asyncHandler';
import PaymentController from './payments.controller';

const router = Router();

router.post('/initiate_payments', asyncHandler(PaymentController.initiateCashIn));

export default router;
