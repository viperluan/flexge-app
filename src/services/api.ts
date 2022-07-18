import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const BASE_URL = isProduction
  ? 'https://api-flexge.herokuapp.com/'
  : 'http://localhost:3000/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
