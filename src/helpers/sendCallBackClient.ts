import Transaction from '../database/models/Transaction';
import marketPlace from '../services/http';

const sendCallbackToClient = async (transaction: Transaction): Promise<void> => {
  try {
    await marketPlace.post('/', {
      reference_id: transaction.reference_id,
      status: transaction.status,
    });
  } catch (err) {
    console.log(err);
  }
};

export default sendCallbackToClient;
