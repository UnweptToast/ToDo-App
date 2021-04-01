import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

function Header(props) {
  return (
    <SafeAreaView style={styles.heading}>
      <Text style={styles.title}>To-Do App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 40,
  },
  heading: {
    backgroundColor: "#000",
    height: "14%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    width: "90%",
    alignSelf: "center",
    marginBottom: 50,
  },
});

export default Header;
