import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RecentContacts from './RecentContacts';
import ChatBox from './ChatBox';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <RecentContacts />
      <ChatBox />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;