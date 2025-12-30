import { Picker } from "@react-native-picker/picker";

interface Moeda {
  key: string;
  label: string;
  value: string;
}

type props = {
  moedas: Moeda[];
  moedaSelecionada: string;
  onChange: (moeda: string) => void;
};

export const PickerItem = ({ moedas, moedaSelecionada, onChange }: props) => {
  return (
    <Picker selectedValue={moedaSelecionada} onValueChange={onChange}>
      {moedas.map((item) => (
        <Picker.Item value={item.value} label={item.label} key={item.key} />
      ))}
    </Picker>
  );
};
