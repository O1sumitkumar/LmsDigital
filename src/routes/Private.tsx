import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectUserData} from '@toolkit/auth/auth.selector';
import SuperAdminRoutes from '@routes/SuperAdmin';
import SubAdminRoutes from '@routes/SubAdmin';
import CreatorTabs from '@routes/creator/Creator';
import {useSelector} from 'react-redux';
import UserRoutes from '@routes/User';
import React from 'react';

const PrivateStack = createNativeStackNavigator();

// this stack will expose final routes based on current user role
export default function PrivateRoutes(): React.JSX.Element {
  const userData = useSelector(selectUserData);

  if (userData) {
    return <></>;
  }

  return (
    <PrivateStack.Navigator initialRouteName="Creator">
      <PrivateStack.Screen name="Creator" component={CreatorTabs} />
      <PrivateStack.Screen name="User" component={UserRoutes} />
      <PrivateStack.Screen name="SuperAdmin" component={SuperAdminRoutes} />
      <PrivateStack.Screen name="SubAdmin" component={SubAdminRoutes} />
    </PrivateStack.Navigator>
  );
}
