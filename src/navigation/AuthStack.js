import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import VoiceprintScreen from '../screens/VoiceprintScreen'

const Stack = createStackNavigator()

export default function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Voiceprint" component={VoiceprintScreen} />
      </Stack.Navigator>
  );
}
