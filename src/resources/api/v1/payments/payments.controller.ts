import { Response, Request } from 'express';
import Transaction from '../../../../database/models/Transaction';
import jsonResponse from '../../../../helpers/jsonResponse';
import sendCallbackToClient from '../../../../helpers/sendCallBackClient';

class PaymentController {
  static async initiateCashIn(req: Request, res: Response): Promise<Response> {
    const {
      reference_id: referenceId, amount, phone_number: phoneNumber, commission,
    } = req.body;

    const transaction = await Transaction.findOne({
      where: {
        reference_id: referenceId,
      },
    });

    if (transaction) {
      return res.status(500).json({
        message: 'BAD REQUEST',
        error: 'reference id should be unique',
      });
    }

    const dbRec = {
      reference_id: referenceId,
      amount,
      phone_number: phoneNumber,
      commission,
      status: 'success',
    };

    const data = await Transaction.create(dbRec);

    sendCallbackToClient(data);

    return jsonResponse({
      message: 'successfully sent the pop up to the user',
      status: 200,
      res,
      data: [dbRec],
      error: null,
    });
  }
}

export default PaymentController;
