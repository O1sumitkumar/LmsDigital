// this is the entry point for the routes
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}
