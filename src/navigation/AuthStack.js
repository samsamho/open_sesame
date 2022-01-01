import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ChatScreen from '../screens/ChatScreen';
import VoiceEnrollScreen from '../screens/VoiceEnrollScreen'
import VoiceAuthScreen from '../screens/VoiceAuthScreen'

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
		<Stack.Screen name="VoiceEnroll" component={VoiceEnrollScreen} />
        <Stack.Screen name="VoiceAuth" component={VoiceAuthScreen} />
		<Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
  );
}
