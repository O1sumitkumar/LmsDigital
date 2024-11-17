import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '@screens/home/DashBoard';
import React from 'react';

const SubAdmin = createNativeStackNavigator();

export default function SubAdminRoutes(): React.JSX.Element {
  return (
    <SubAdmin.Navigator>
      <SubAdmin.Screen name="Dashboard" component={DashBoard} />
    </SubAdmin.Navigator>
  );
}
