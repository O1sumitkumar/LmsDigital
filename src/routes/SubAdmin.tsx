import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

const SubAdminStack = createNativeStackNavigator();

const DashBoard = () => {
  return <></>;
};

export default function SubAdminRoutes(): React.JSX.Element {
  return (
    <SubAdminStack.Navigator>
      <SubAdminStack.Screen name="Dashboard" component={DashBoard} />
    </SubAdminStack.Navigator>
  );
}
