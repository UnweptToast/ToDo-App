import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Button(props) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setPressed(true);
        props.handler(props.id);
      }}
    >
      <Ionicons
        name={pressed ? "radio-button-on" : "radio-button-off"}
        size={35}
        color="orange"
        style={styles.button}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 30,
    marginLeft: 30,
  },
});

export default Button;
