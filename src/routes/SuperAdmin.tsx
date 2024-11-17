import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '@screens/home/DashBoard';
import React from 'react';

const SuperAdmin = createNativeStackNavigator();

export default function SuperAdminRoutes(): React.JSX.Element {
  return (
    <SuperAdmin.Navigator>
      <SuperAdmin.Screen name="Dashboard" component={DashBoard} />
    </SuperAdmin.Navigator>
  );
}
