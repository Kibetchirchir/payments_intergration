import { Response, Request } from 'express';
import Transaction from '../../../../database/models/Transaction';
import sendCallbackToClient from '../../../../helpers/sendCallBackClient';

class PaymentController {
  static async initiateCashIn(req: Request, res: Response): Promise<Response> {
    const {
      reference_id: referenceId, amount, phone_number: phoneNumber, commission,
    } = req.body;

    const dbRec = {
      reference_id: referenceId,
      amount,
      phone_number: phoneNumber,
      commission,
      status: 'success',
    };

    const data = await Transaction.create(dbRec);

    sendCallbackToClient(data);

    return res.status(201).json({
      message: 'successfully sent the pop up to the user',
      data,
    });
  }
}

export default PaymentController;
