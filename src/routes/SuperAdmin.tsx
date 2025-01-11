import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const SuperAdminStack = createNativeStackNavigator();

const DashBoard = () => {
  return <></>;
};

export default function SuperAdminRoutes(): React.JSX.Element {
  return (
    <SuperAdminStack.Navigator>
      <SuperAdminStack.Screen name="Dashboard" component={DashBoard} />
    </SuperAdminStack.Navigator>
  );
}
