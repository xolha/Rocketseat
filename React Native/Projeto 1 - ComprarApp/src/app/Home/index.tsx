import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          Hello World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

