import React from 'react'
import { Text,View,StyleSheet} from "react-native"
import RecentContacts from './RecentContacts'

const Home = () => {
  return (
    <View style = {styles.background}>
      <RecentContacts />
    </View>
    
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
})
export default Home;