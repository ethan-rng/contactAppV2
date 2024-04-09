import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from "react-native";
import Parameter from "./Parameter";
import QRCode from "react-native-qrcode-svg";
import { INITIAL_64IMG } from "./initial";

const Profile = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [icons, setIcons] = useState([
    {
      name: "Phone Number",
      icon: "phone",
      data: "647-779-9806",
    },
    {
      name: "Email",
      icon: "email",
      data: "ethan.rong@gmail.com",
    },
    {
      name: "LinkedIn (Optional)",
      icon: "linkedin",
      data: "https://www.linkedin.com/in/ethanrong2004/",
    },
    {
      name: "Instagram (Optional)",
      icon: "instagram",
      data: "https://www.instagram.com/ethan.rng/",
    },
    {
      name: "Discord (Optional)",
      icon: "discord",
      data: "theAllKnowing",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // const [base64Image, setBase64Image] = useState(INITIAL_64IMG);
  const [username, setuserName] = useState("Ethan Rong");
  const [userCompany, setUserCompany] = useState("WFN");
  const [userJob, setUserJob] = useState("Project Director");
  const [userPronouns, setUserPronouns] = useState("he/him");

  const [showQR, setshowQR] = useState(false);

  const handleEditProfile = () => {
    setLoading(false);

    // Fetching to Database
    fetch((BASE) => {}, [loading]);
  };

  if (loading) {
    return (
      <View>
        <Text>Loading Profile</Text>
      </View>
    );
  } else {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.profileContainer}>
            <TouchableOpacity
              onPress={() => {
                setshowQR(!showQR);
              }}
            >
              {showQR ? (
                <Image
                  style={styles.profile}
                  source={{ uri: `${apiUrl}/media/photos/mainprofile.jpeg` }}
                />
              ) : (
                <QRCode
                  value={JSON.stringify({
                    name: username,
                    company: userCompany,
                    job: userJob,
                    pronouns: userPronouns,

                    phoneNumber: icons[0].data,
                    email: icons[1].data,
                    linkedin: icons[2].data,
                    instagram: icons[3].data,
                    discord: icons[4].data,
                  })}
                  style={styles.QRCode}
                  size={100}
                />
              )}
            </TouchableOpacity>

            <View style={styles.info}>
              <Text style={{ fontSize: 45 }}>{username}</Text>
              <Text>Company: {userCompany}</Text>
              <Text>Job Title: {userJob}</Text>
              <Text>Pronouns: {userPronouns}</Text>
            </View>
          </View>

          {icons.map((icon, index) => (
            <Parameter
              key={index}
              name={icon.name}
              icon={icon.icon}
              data={icon.data}
            />
          ))}

          <TouchableOpacity
            title="Press to Edit"
            style={styles.button}
            onPress={handleEditProfile}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 32,
    margineLeft: 32,
  },
  profile: {
    height: 140,
    width: 140,
    borderRadius: 160,
    borderColor: "#3a74a5",
    borderWidth: 2,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
    width: "100%",
    height: "20%",
    paddingBottom: 30,
  },
  info: {},

  qrCode: {},
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
export default Profile;
