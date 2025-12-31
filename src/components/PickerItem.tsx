import { Picker } from "@react-native-picker/picker";

type Moeda = {
  key: string;
  label: string;
  value: string;
};

type MoedaProps = {
  moedas: Moeda[];
  moedaSelecionada: string;
  onChange: (moeda: string) => void;
};

export const PickerItem = ({
  moedas,
  moedaSelecionada,
  onChange,
}: MoedaProps) => {
  return (
    <Picker
      selectedValue={moedaSelecionada}
      onValueChange={(value) => onChange(value)}
    >
      {moedas.map((item) => (
        <Picker.Item value={item.value} label={item.label} key={item.key} />
      ))}
    </Picker>
  );
};
