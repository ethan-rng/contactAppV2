import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";

const contactList = (props) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  return (
    <SafeAreaView>
      <View style={styles.background}>
        <View>
          {/* If the image is not available, display a placeholder image */}
          {props.image !== null ? (
            <Image
              source={{ uri: `${apiUrl + props.image}` }}
              style={styles.leftHalf}
            />
          ) : (
            <Image
              source={{
                uri: `https://ui-avatars.com/api/?background=random&name=${props.first_name}+${props.last_name}`,
              }}
              style={styles.leftHalf}
            />
          )}
        </View>
        <View style={styles.rightHalf}>
          <Text style={styles.header}>
            {props.first_name + " " + props.last_name}
          </Text>
          <Text style={styles.pronoun}>{props.pronoun}</Text>
          <Text style={styles.description}>{props.location}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    width: 360,
    height: 110,
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    margin: 15,
  },
  leftHalf: {
    margin: 10,
    padding: 10,
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  header: {
    paddingTop: 26,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 10,
    color: "#000000",
    width: 245,
    height: 35,
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    color: "#000000",
    width: 245,
    height: 50,
  },
  pronoun: {
    fontSize: 15,
    lineHeight: 21,
    color: "#7D7D7D",
    width: 245,
    height: 25,
  },
});
export default contactList;
