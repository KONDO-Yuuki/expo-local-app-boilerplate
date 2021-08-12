import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { add, reset } from "../redux/Todos";

export default function TabOneScreen() {
  const notes = useSelector((state: RootState) =>
    state.todos.map((todo) => todo.note)
  );
  const dispatch = useDispatch();

  const addMotivation = () => dispatch(add({ note: "\ud83d\udcaa" }));
  const resetMotivation = () => dispatch(reset());
  return (
    <View style={styles.container}>
      {notes.map((note, i) => (
        <Text key={i}>{note}</Text>
      ))}
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addMotivation} title={"add motivation"} />
        <Button onPress={resetMotivation} title={"reset motivation"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "column",
    height: 100,
    justifyContent: "space-around",
  },
});
