import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import ToDo from "./components/ToDo";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
