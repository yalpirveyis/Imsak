import { View, Text } from "react-native";
import React from "react";
import { COLORS, windowWidth } from "../Constants";
import Box from "./Box";

export default function TimeBox({ time, colorMode }) {
  return (
    <View
      style={{
        width: "100%",
        paddingBottom: 5,
      }}
    >
      <View>
        <Box
          colorMode={colorMode}
          width="100%"
          detail={[
            { weight: "Inter_500Black", size: 18, text: time.MiladiTarihUzun },
          ]}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "İmsak" },
              { weight: "Inter_500Black", size: 18, text: time.Imsak },
            ]}
          />
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "Güneş" },
              { weight: "Inter_500Black", size: 18, text: time.Gunes },
            ]}
          />
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "Öğle" },
              { weight: "Inter_500Black", size: 18, text: time.Ogle },
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "İkindi" },
              { weight: "Inter_500Black", size: 18, text: time.Ikindi },
            ]}
          />
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "Akşam" },
              { weight: "Inter_500Black", size: 18, text: time.Aksam },
            ]}
          />
          <Box
            colorMode={colorMode}
            detail={[
              { weight: "Inter_900Black", size: 16, text: "Yatsı" },
              { weight: "Inter_500Black", size: 18, text: time.Yatsi },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
