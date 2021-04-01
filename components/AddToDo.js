import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function AddToDo(props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a task.."
        placeholderTextColor="grey"
        style={styles.input}
        onChangeText={(value) => {
          setText(value);
        }}
        defaultValue={text}
      />
      <TouchableOpacity
        style={{ backgroundColor: null, justifyContent: "center" }}
        onPress={() => {
          if (text.length >= 4) {
            setText("");
            props.addTask(text);
          } else {
            alert("Text entered should be at least 4 characters long");
          }
        }}
      >
        <View>
          <Text style={{ color: "orange", fontSize: 20 }}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#ffffff",
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    width: "60%",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: null,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 100,
  },
});

export default AddToDo;
