import 'react-native-gesture-handler';
import { StyleSheet, Text, Image, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Network from '../screens/Network/Network';
import FaceID from '../screens/FaceID/FaceID';
import index from '../screens/AddProfile/index';
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
        name={'Home'}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/MenuBar/Home.jpeg')} 
            style={{ height: 30, width: 30}} 
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Network'}
        component={Network}
        options={{
          title: 'Network',
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/MenuBar/Network.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'FaceID'}
        component={FaceID}
        options={{
          title: 'FaceID',
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/MenuBar/FaceID.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'Add Profile'}
        component={index}
        options={{
          title: 'Add Profile',
          tabBarIcon: ({ focused }) => (
            focused ? <Image source={require('../assets/MenuBar/Add.jpeg')} style={{ height: 30, width: 30 }} /> : <Image source={require('../assets/MenuBar/FaceID.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/MenuBar/Profile.jpeg')} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 900,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
