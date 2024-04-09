import React from 'react';
import { View, StyleSheet } from 'react-native';
import RecentContacts from './RecentContacts';
import ChatBox from './ChatBox';

const Home = () => {
  return (
    <View style={styles.container}>
      <RecentContacts />
      <ChatBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;