import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: {backgroundColor: "purple"},
  headerTitleStyle: {color:"white"},
  headerTintColor:"white",
}
export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
  );
}