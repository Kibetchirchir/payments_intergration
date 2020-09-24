import { Response, Request } from 'express';
import Transaction from '../../../../database/models/Transaction';

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
    };

    const data = await Transaction.create(dbRec);

    return res.status(201).json({
      message: 'successfully created',
      data,
    });
  }
}

export default PaymentController;
