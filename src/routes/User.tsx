import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

const UserStack = createNativeStackNavigator();

const DashBoard = () => {
  return <></>;
};

export default function UserRoutes(): React.JSX.Element {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="Dashboard" component={DashBoard} />
    </UserStack.Navigator>
  );
}
