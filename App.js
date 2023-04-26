import "react-native-gesture-handler";
import UserStack from "./naviation/userStack";
import { StatusBar, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Instagram': require('./assets/fonts/grandista.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
