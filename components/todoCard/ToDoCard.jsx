import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./ToDoCard.style";
import checkIcon from "../../assets/check.png";

export default function ToDoCard({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      style={s.card}
      onPress={() => onPress(todo)}
    >
      <Text
        style={[
          s.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={s.img} source={checkIcon} resizeMode="contain" />
      )}
    </TouchableOpacity>
  );
}
