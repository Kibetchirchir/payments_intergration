import Transaction from '../database/models/Transaction';
import marketPlace from '../services/http';

const sendCallbackToClient = async (transaction: Transaction): Promise<void> => {
  await marketPlace.post('/', {
    reference_id: transaction.reference_id,
    status: transaction.status,
  });
};

export default sendCallbackToClient;
