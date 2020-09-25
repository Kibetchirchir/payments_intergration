import jsonResponseI from '../types/jsonResponsei';

const jsonResponse = ({
  message, data, error, status, res,
}: jsonResponseI) => res.status(status).json({
  status,
  message,
  data: data || null,
  error: error || null,
});

export default jsonResponse;
