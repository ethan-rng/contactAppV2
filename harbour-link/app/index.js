import 'react-native-gesture-handler';
import { StyleSheet, Text, Image, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Network from '../screens/Network/Network';
import FaceID from '../screens/FaceID/FaceID';
import index from '../screens/AddProfile/AddProfile';
import Profile from '../screens/Profile/Profile';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName = 'Home' >
      <Stack.Screen
        name={'Home'}
        component={TabNavigator}
        options = {{headerShown: false}}
      />
      <Stack.Screen
        name={'Network'}
        component={TabNavigator} 
        options = {{headerShown: false}}/>
      <Stack.Screen
        name={'FaceID'}
        component={TabNavigator}
        options = {{headerShown: false}} />
      <Stack.Screen
        name={'Add Profile'}
        component={TabNavigator}
        options = {{headerShown: false}} />
      <Stack.Screen
        name={'Profile'}
        component={TabNavigator}
        options = {{headerShown: false}} />
    </Stack.Navigator>
  );
};
export default StackNavigation;

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name={'Home2'}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/HomeHue.jpeg')} style={{ height: 30, width: 30}}/> : <Image source={require('../assets/MenuBar/Home.jpg')} style={{ height: 30, width: 30}}/>
          ),
        }}
      />
      <Tab.Screen
        name={'Network'}
        component={Network}
        options={{
          title: 'Network',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/NetworkHue.jpg')} style={{ height: 30, width: 30 }} /> : <Image source={require('../assets/MenuBar/Network.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'FaceID'}
        component={FaceID}
        options={{
          title: 'Scan Face',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/FaceIDHue.jpg')} style={{ height: 30, width: 30 }} /> : <Image source={require('../assets/MenuBar/FaceID.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'Add Profile'}
        component={index}
        options={{
          title: 'Scan QR code to add contact',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/AddProfileHue.jpg')} style={{ height: 30, width: 30 }} /> : <Image source={require('../assets/MenuBar/Add.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/ProfileHue.jpg')} style={{ height: 30, width: 30 }} /> : <Image source={require('../assets/MenuBar/Profile.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
  },
  
});
