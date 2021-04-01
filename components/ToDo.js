import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import Button from "./Button";
import AddToDo from "./AddToDo";

function ToDo(props) {
  const [todo, setTodo] = useState([
    { text: "Make some coffee", id: 1 },
    { text: "Read a book", id: 2 },
    { text: "Finish homework", id: 3 },
  ]);

  const removeTodo = (id) => {
    setTimeout(() => {
      setTodo((prevTodo) => prevTodo.filter((person) => person.id != id));
    }, 1000);
  };

  const addTodo = (text) => {
    setTodo((prevTodo) => {
      return [{ text: text, id: prevTodo.length + 1 }, ...prevTodo];
    });
  };

  if (todo.length !== 0) {
    return (
      <ScrollView>
        <FlatList
          data={todo}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <Button handler={removeTodo} id={item.id} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 28,
                    marginRight: 120,
                    marginVertical: 20,
                  }}
                  numberOfLines={5}
                >
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
        <AddToDo addTask={addTodo} />
      </ScrollView>
    );
  } else {
    return (
      <View>
        <AddToDo addTask={addTodo} />
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 28,
            marginHorizontal: 40,
            display: "flex",
          }}
          numberOfLines={2}
        >
          Hoorrayy! You have no tasks left...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    alignSelf: "center",
    minHeight: 70,
    backgroundColor: "#111",
    width: "80%",
    justifyContent: "flex-start",
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
  },
});

export default ToDo;
