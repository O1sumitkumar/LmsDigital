import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SuperAdminRoutes from '@routes/SuperAdmin';
import {RootState} from '@toolkit/rootReducer';
import SubAdminRoutes from '@routes/SubAdmin';
import CreatorRoutes from '@routes/Creator';
import {useSelector} from 'react-redux';
import UserRoutes from '@routes/User';
import React from 'react';

const Private = createNativeStackNavigator();

// this stack will expose final routes based on current user role
export default function PrivateRoutes(): React.JSX.Element {
  const {userData} = useSelector((state: RootState) => state?.userData);

  if (userData) {
    return <></>;
  }

  return (
    <Private.Navigator initialRouteName="Creator">
      <Private.Screen name="Creator" component={CreatorRoutes} />
      <Private.Screen name="User" component={UserRoutes} />
      <Private.Screen name="SuperAdmin" component={SuperAdminRoutes} />
      <Private.Screen name="SubAdmin" component={SubAdminRoutes} />
    </Private.Navigator>
  );
}
