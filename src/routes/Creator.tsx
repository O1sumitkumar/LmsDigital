import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '@screens/home/DashBoard';
import React from 'react';

const Creator = createNativeStackNavigator();

export default function CreatorRoutes(): React.JSX.Element {
  return (
    <Creator.Navigator>
      <Creator.Screen name="Dashboard" component={DashBoard} />
    </Creator.Navigator>
  );
}
