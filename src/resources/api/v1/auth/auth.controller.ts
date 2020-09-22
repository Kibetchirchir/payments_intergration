import { Request, Response } from 'express';
import User from '../../../../database/models/User';

class AuthController {
  static async signUp(req: Request, res: Response): Promise<Response> {
    const { name, phone_number: phoneNumber } = req.body;

    const userData = {
      name,
      phone_number: phoneNumber,
    };

    const user = await User.create(userData);

    return res.status(200).json({
      message: 'created',
      data: user,
    });
  }
}

export default AuthController;
