import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { s } from "./App.style";
import Header from "./components/header/Header";
import ToDoCard from "./components/todoCard/ToDoCard";
import { useState } from "react";
import TabBottomMenu from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Walk the dog", isCompleted: true },
    { id: 2, title: "Go to dentist", isCompleted: false },
    { id: 3, title: "Complete React Native task", isCompleted: true },
  ]);

  const [selectedTabName, setSelectedTabName] = useState("all");

  function renderTodoList() {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <ToDoCard todo={todo} onPress={updateTodo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodoList = [...todoList];
    const idxToUpdated = updatedTodoList.findIndex((t) => t.id == todo.id);
    updatedTodoList[idxToUpdated] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>
        <View style={s.body}>
          <ScrollView>{renderTodoList()}</ScrollView>
        </View>
        <View style={s.footer}>
          <TabBottomMenu
            selectedTabName={selectedTabName}
            onPress={(selectedTabName) => setSelectedTabName(selectedTabName)}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
