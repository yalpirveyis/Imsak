import { Dimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const AndroidBarHeight = 24;
export const COLORS = {
  DARK: {
    text: "#fff",
    backgroundColor: "#000",
  },
  LIGHT: {
    text: "#000",
    backgroundColor: "#fff",
  },
};
