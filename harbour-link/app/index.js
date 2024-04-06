import { StyleSheet, Text, View } from "react-native";
import MenuBar from "../components/MenuBar";
import {createStackNavigator} from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/auth/Home'
import AddProfile from '../screens/auth/AddProfile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return <Stack.Navigator initialRouteName = 'Home'>
    <Stack.Screen name={'Home'} component={Home} />
  </Stack.Navigator>
}

export default function Page() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={homeName} component={Home} options={{
        title: 'Home', tabBarIcon: ({ focused }) => (
          <Image source={require('../assets/MenuBar/Home.jpeg')} style={{height:30, width: 30}} />
        ),
      }}
      />
    </Tab.Navigator>
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
