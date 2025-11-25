import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import  Button from "@/components/Button";
import {styles} from "./styles";
import Input from "@/components/Input";

export default function Index() {
  return (
    <View style={styles.container}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <Input placeholder="O que você quer comprar?" />
        <Button title="Entrar"/>
      <StatusBar style="auto" />
    </View>
  );
}

