import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: width * 0.95,
    aspectRatio: 9 / 3.5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    gap: 5,
    marginLeft: 10,
  },
  order: {
    borderRadius: 100,
    position: "absolute",
    paddingHorizontal: 10,
    paddingVertical: 4,
    top: -10,
    left: -10,
  },
  verticalEllipsis: {
    position: "absolute",
    right: -15,
    top: -5,
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
  },
});
