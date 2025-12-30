// https://economia.awesomeapi.com.br/json/all
// > Rota para buscar BTC > : all/BTC-BRL
// https://api.fxratesapi.com/latest?api_key=YOUR_ACCESS_TOKEN

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.fxratesapi.com/",
  params: {
    api_key: process.env.EXPO_PUBLIC_FX_API_KEY,
  },
});
