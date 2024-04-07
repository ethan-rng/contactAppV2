import React from "react";
import { View, StyleSheet, Image } from "react-native";


const MenuBar = () => {
  return (
    <View>
        <Image source={require('../assets/MenuBar/Home.jpeg')} style={styles.icon} />
        <Image source={require('../assets/MenuBar/Network.jpeg')} style={styles.icon} />
        <Image source={require('../assets/MenuBar/FaceID.jpeg')} style={styles.icon} />
        <Image source={require('../assets/MenuBar/Add.jpeg')} style={styles.icon} />
        <Image source={require('../assets/MenuBar/Profile.jpeg')} style={styles.icon} />

    </View>
    );
};


const styles = StyleSheet.create({  
    container: {
        flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 300,
      paddingVertical: 300,
      backgroundColor: '#333'
    },
    icon: {
        width: 100,  // Set the width as needed
        height: 100, // Set the height as needed
    }
})
export default MenuBar;
