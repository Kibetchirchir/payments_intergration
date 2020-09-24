import { Router } from 'express';
import Auth from './auth/auth.routes';
import payments from './payments/payments.routes';

const router = Router();

router.use('/auth', Auth);
router.use('/payments', payments);

export default router;
