import React from "react";
import { View, Text, Image } from "react-native";
const iconImages = {
  email: require("../../assets/Profile/email.png"),
  discord: require("../../assets/Profile/discord.png"),
  instagram: require("../../assets/Profile/instagram.png"),
  linkedin: require("../../assets/Profile/linkedin.png"),
  phone: require("../../assets/Profile/phone.png"),
};

const Parameter = (props) => {
  return (
    <View
      style={{
        width: "100%",
        paddingLeft: 32,
        margin: 6,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "black", fontSize: 16 }}>{props.name}</Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 5,
          borderWidth: 1.5,
          borderColor: "black",
          borderRadius: 10,
          marginRight: 32,
        }}
      >
        <Image
          source={iconImages[props.icon]}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={{ color: "black" }}>{props.data}</Text>
      </View>
    </View>
  );
};

export default Parameter;
