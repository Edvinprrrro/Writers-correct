import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: width * 0.45,
    aspectRatio: 9 / 16,
    elevation: 10,
    height: 200,
  },
  lowerStrip: {
    height: "20%",
    width: "100%",
    marginTop: "auto",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 2,
  },
  verticalEllipsis: {
    alignSelf: "flex-end",
    paddingTop: 10,
  },
});
