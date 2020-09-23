import { Router } from 'express';
import asyncHandler from '../../../../middlewares/asyncHandler';
import AuthController from './auth.controller';

const router = Router();

router.post('/signup', asyncHandler(AuthController.signUp));

export default router;
