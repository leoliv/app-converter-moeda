import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PickerItem } from "./src/components/PickerItem";
import { api } from "./src/services/api";
import { useEffect, useState } from "react";

type Moeda = {
  key: string;
  label: string;
  value: string;
};

export default function App() {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState<string>("");
  useEffect(() => {
    const loadMoedas = async () => {
      const response = await api.get("latest");

      let arrayMoedas: Moeda[] = [];

      Object.keys(response.data.rates).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });

      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key);
      setLoading(false);
    };

    loadMoedas();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101215",
        }}
      >
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <View style={styles.areaMoeda}>
            <Text style={styles.tituloMoeda}>Selecione sua moeda</Text>
            <PickerItem
              moedas={moedas}
              moedaSelecionada={moedaSelecionada}
              onChange={(moeda: string) => {
                setMoedaSelecionada(moeda);
              }}
            />
          </View>
          <View style={styles.areaValor}>
            <Text style={styles.titulo}>
              Digite um valor para converter em (R$)
            </Text>
            <TextInput
              placeholder="EX: 1.50"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.bntArea}>
            <Text style={styles.bntText}>Converter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101215",
    alignItems: "center",
  },
  areaMoeda: {
    backgroundColor: "#f9f9f9",
    marginTop: 40,
    width: "90%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
  },
  tituloMoeda: {
    fontWeight: "bold",
    color: "#101215",
  },
  areaValor: {
    width: "90%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderTopWidth: 1,
  },
  titulo: {
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    color: "#000",
  },
  bntArea: {
    width: "90%",
    backgroundColor: "#ff2819ff",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  bntText: {
    fontSize: 20,
    color: "#f9f9f9",
    fontWeight: "bold",
  },
});
