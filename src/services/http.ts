import axios from 'axios';

const marketPlaceBaseURL = process.env.MARKET_PLACE_BASE_URL;

const marketPlace = axios.create({
  baseURL: marketPlaceBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default marketPlace;
