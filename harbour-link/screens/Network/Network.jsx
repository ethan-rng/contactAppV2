import React from 'react'
import {Text, SafeAreaView, StyleSheet,View,TextInput} from "react-native"
const Network = () => {
  return (
    <SafeAreaView >
      <TextInput placeholder='Search' clearButtonMode = 'always' style={styles.searchBar} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical:10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
}
);
export default Network;