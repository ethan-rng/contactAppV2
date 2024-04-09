import React from 'react'
import {Text, SafeAreaView, StyleSheet,View,TextInput} from "react-native"
import ContactList from "./ContactList"
const Network = () => {
  return (
    <SafeAreaView >
      <TextInput placeholder='Search for contacts' style={styles.searchBar} />
      <ContactList name="Ethan Zhao" location="Western Founders Network" pronoun="she/her"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical:10,
    borderColor: '#C5C2C2',
    borderWidth: 1,
    borderRadius: 30,
    margin: 15,
  },
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
    paddingTop: 15,
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#000000',
  }


}
);
export default Network;