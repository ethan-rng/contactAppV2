import React from 'react'
import {Text, SafeAreaView, StyleSheet,View,TextInput} from "react-native"

const contactList = (props) => {
  return (
    <SafeAreaView >
      <View style = {styles.background}>
        <View style = {styles.leftHalf}>
        </View>
        <View style = {styles.rightHalf}>
          <Text style={styles.header}>{props.name}</Text>
          <Text style={styles.pronoun}>{props.pronoun}</Text>
          <Text style = {styles.description}>{props.location}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    width: 360,
    height: 110,
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    margin: 15,
  },
  leftHalf: {
    margin: 10,
    padding: 10,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'red',
  },
  header: {
    paddingTop: 26,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 10,
    color: '#000000',
    width: 245,
    height: 35,
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    color: '#000000',
    width: 245,
    height:50,
  },
  pronoun: {
    fontSize: 15,
    lineHeight: 21,
    color: '#7D7D7D',
    width: 245,
    height:25,
  },
}
);
export default contactList;