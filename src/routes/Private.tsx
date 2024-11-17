import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '@toolkit/rootReducer';
import SuperAdminRoutes from './SuperAdmin';
import SubAdminRoutes from './SubAdmin';
import {useSelector} from 'react-redux';
import CreatorRoutes from './Creator';
import UserRoutes from './User';
import React from 'react';

const Private = createNativeStackNavigator();

// this stack will expose final routes based on current user role
export default function PrivateRoutes(): React.JSX.Element {
  const {userData} = useSelector((state: RootState) => state?.userData);

  if (!userData) {
    return <></>;
  }

  return (
    <Private.Navigator>
      <Private.Screen name="Creator" component={CreatorRoutes} />
      <Private.Screen name="User" component={UserRoutes} />
      <Private.Screen name="SuperAdmin" component={SuperAdminRoutes} />
      <Private.Screen name="SubAdmin" component={SubAdminRoutes} />
    </Private.Navigator>
  );
}
