require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://free.currencyconverterapi.com/api/v5',
  timeout: process.env.TIMEOUT || 5000
});

module.exports = {
  convertCurrency: async (from, to) => {
    const response = await api.get(
      `/convert?apiKey=9816897b34a5b96b4c41&q=${from}_${to}&compact=y`
    );
    const key = Object.keys(response.data)[0];
    const { val } = response.data[key];
    return { rate: val };
  }
};
