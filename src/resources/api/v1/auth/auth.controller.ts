import User from "../../../../database/models/User";
import { Request, Response } from 'express';

class AuthController{
    static async signUp(req: Request, res: Response): Promise<Response>{

        console.log(req.body);
        const { name, phone_number: phoneNumber } = req.body;

        const userData = {
            name: name,
            phone_number: phoneNumber,
        }

        const user = await User.create(userData);

        return res.status(200).json({
            message: 'created',
            data: user,
        })
    }
}

export default AuthController;
