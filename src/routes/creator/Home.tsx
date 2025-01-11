import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoard} from '@creator/dahboard';
import React from 'react';

const CreatorStack = createNativeStackNavigator();

const CreatorPath = {
  Dashboard: 'Dashboard',
};

export default function HomeStack(): React.JSX.Element {
  return (
    <CreatorStack.Navigator>
      <CreatorStack.Screen name={CreatorPath.Dashboard} component={DashBoard} />
    </CreatorStack.Navigator>
  );
}
