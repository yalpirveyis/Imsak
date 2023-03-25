import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Box from "../components/Box";
import C_Text from "../components/C_Text";

import { AndroidBarHeight, COLORS } from "../Constants";
import TimeBox from "../components/TimeBox";
export default function Home() {
  const [colorMode, setColorMode] = useState("LIGHT");
  const [modalVisible, setModalVisible] = useState(false);
  const [country, setCountry] = useState(2);
  const [countryList, setCountryList] = useState();
  const [city, setCity] = useState();
  const [cityList, setCityList] = useState();
  const [district, setDistrict] = useState();
  const [districtList, setDistrictList] = useState([]);
  const [date, setDate] = useState();

  const getCity = async (id) => {
    try {
      const response = await fetch(
        `https://ezanvakti.herokuapp.com/sehirler/${id}`
      );
      const json = await response.json();
      setCityList(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getDistrict = async (id) => {
    try {
      const response = await fetch(
        `https://ezanvakti.herokuapp.com/ilceler/${id}`
      );
      const json = await response.json();
      setDistrictList(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getDate = async (id) => {
    try {
      const response = await fetch(
        `https://ezanvakti.herokuapp.com/vakitler/${id}`
      );
      const json = await response.json();
      setDate(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCity(2);
  }, []);
  console.log("date", date);
  return (
    <ScrollView
      style={{
        backgroundColor:
          colorMode == "DARK"
            ? COLORS.DARK.backgroundColor
            : COLORS.LIGHT.backgroundColor,
        marginTop: AndroidBarHeight,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorMode == "DARK"
              ? COLORS.DARK.backgroundColor
              : COLORS.LIGHT.backgroundColor,
          margin: 10,
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              width: "95%",
              backgroundColor:
                colorMode == "DARK"
                  ? COLORS.DARK.backgroundColor
                  : COLORS.LIGHT.backgroundColor,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              alignSelf: "center",
              padding: 20,

              position: "absolute",
              bottom: 0,
              //shadow
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
              borderColor: "grey",
              borderWidth: 0.5,
            }}
          >
            <Picker
              selectedValue={city}
              onValueChange={(itemValue) => {
                setCity(itemValue);
                getDistrict(itemValue);
              }}
            >
              {cityList?.map((city, index) => (
                <Picker.Item
                  key={index}
                  label={city.SehirAdi}
                  value={city.SehirID}
                />
              ))}
            </Picker>
            {districtList?.length > 0 && (
              <Picker
                selectedValue={district}
                onValueChange={(itemValue) => {
                  setDistrict(itemValue);
                  getDate(itemValue);
                }}
              >
                {districtList?.map((district, index) => (
                  <Picker.Item
                    key={index}
                    label={district.IlceAdi}
                    value={district.IlceID}
                  />
                ))}
              </Picker>
            )}
            <TouchableOpacity
              style={{ position: "absolute", top: 10, right: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor:
                    colorMode == "DARK" ? COLORS.DARK.text : COLORS.LIGHT.text,
                }}
                source={require("../assets/close.png")}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <C_Text
              colorMode={colorMode}
              fontFamily="Inter_900Black"
              fontSize={24}
            >
              İstanbul
            </C_Text>
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  tintColor:
                    colorMode == "DARK" ? COLORS.DARK.text : COLORS.LIGHT.text,
                }}
                source={require("../assets/settings.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <C_Text
              colorMode={colorMode}
              fontFamily="Inter_500Black"
              fontSize={16}
            >
              25 Mart
            </C_Text>
            <TouchableOpacity
              onPress={() =>
                setColorMode(colorMode == "DARK" ? "LIGHT" : "DARK")
              }
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={
                  colorMode == "DARK"
                    ? require("../assets/dark.png")
                    : require("../assets/light.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          style={{
            width: "100%",
            height: 200,
            alignSelf: "center",
            borderRadius: 10,
          }}
          source={require("../assets/cities/istanbul.jpg")}
        />
        {date?.map((time, index) => (
          <TimeBox time={time} key={index} colorMode={colorMode} />
        ))}
      </View>
    </ScrollView>
  );
}
