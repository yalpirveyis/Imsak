import { View } from "react-native";
import React from "react";
import C_Text from "./C_Text";
import { COLORS, windowWidth } from "../Constants";
export default function Box({ detail, width, colorMode }) {
  return (
    <View
      style={{
        backgroundColor:
          colorMode == "DARK"
            ? COLORS.DARK.backgroundColor
            : COLORS.LIGHT.backgroundColor,
        paddingVertical: 10,
        width: width ? width : windowWidth / 3 - 15,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: colorMode == "DARK" ? COLORS.DARK.text : COLORS.LIGHT.text,
        shadowRadius: 10,
        alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      {detail?.map((item, index) => (
        <C_Text
          colorMode={colorMode}
          key={index}
          fontFamily={item.weight}
          fontSize={item.size}
        >
          {item.text}
        </C_Text>
      ))}
    </View>
  );
}
