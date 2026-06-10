import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <text style={styles.titulo}>Home</text>
      <text style={styles.subtitulo}>Bem vindo ao nosso APP</text>
      <TouchableOpacity
      style={styles.botao}
      onPress={router.push('/detalhes')}
      >
        <text style={styles.textoBotao}>Detalhes</text>
      </TouchableOpacity>
    </View>
  );
}
const styles= StyleSheet.create({

})