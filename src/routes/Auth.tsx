// all the auth routes go here

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, WelcomeScreen} from '@screens/auth';

const Stack = createNativeStackNavigator();

function Auth(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={WelcomeScreen}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default Auth;
