import React from 'react'
import { Text,View,StyleSheet} from "react-native"
const Home = () => {
  return (
    <View style = {styles.background}>
      <Text>HOME PAGE!!</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },
})
export default Home;