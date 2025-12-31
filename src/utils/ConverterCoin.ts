import { Keyboard } from "react-native";
import { api } from "../services/api";

// https://api.fxratesapi.com/convert?from=GBP&to=EUR&date=2012-06-24&amount=234.12&format=json
export const ConverterCoin = async (
  valorDigitado: number,
  moedaSelecionada: string,
  setValorMoeda: (value: number) => void,
  setValorConvertido: (value: string) => void
) => {
  if (valorDigitado === 0 || isNaN(valorDigitado) || moedaSelecionada === "") {
    alert("Por favor, insira um valor válido maior que zero.");
    return;
  }

  const response = await api.get(
    `convert?from=${moedaSelecionada}&to=BRL&amount=${valorDigitado}&format=json`
  );

  const valorConvertido = Number(response.data.result);
  setValorMoeda(valorDigitado);
  setValorConvertido(
    `${valorConvertido.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`
  );
  Keyboard.dismiss();
};
