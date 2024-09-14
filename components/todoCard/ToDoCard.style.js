import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 13,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
  },
  img: {
    height: 25,
    width: 25,
  },
});
