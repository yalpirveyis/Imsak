import { View, Text } from "react-native";
import React from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_500Black,
  Inter_200Black,
} from "@expo-google-fonts/inter";
import { COLORS } from "../Constants";
export default function C_Text({ children, fontFamily, fontSize, colorMode }) {
  let [fonts900Loaded] = useFonts({
    Inter_900Black,
  });
  let [fonts500Loaded] = useFonts({
    Inter_500Black,
  });
  let [fonts200Loaded] = useFonts({
    Inter_200Black,
  });

  if (!fonts900Loaded && !fonts500Loaded && !fonts200Loaded) {
    return null;
  }
  return (
    <Text
      style={{
        fontFamily,
        fontSize,
        color: colorMode == "DARK" ? COLORS.DARK.text : COLORS.LIGHT.text,
      }}
    >
      {children}
    </Text>
  );
}
