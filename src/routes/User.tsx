import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '@screens/home/creator/home/DashBoard';
import React from 'react';

const User = createNativeStackNavigator();

export default function UserRoutes(): React.JSX.Element {
  return (
    <User.Navigator>
      <User.Screen name="Dashboard" component={DashBoard} />
    </User.Navigator>
  );
}
