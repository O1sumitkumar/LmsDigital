import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectUserData} from '@toolkit/auth/auth.selector';
import PrivateRoutes from '@routes/Private';
import {useSelector} from 'react-redux';
import Auth from '@routes/Auth';
import React from 'react';

const MainStack = createNativeStackNavigator();
const ParentStack = createNativeStackNavigator();

function ParentNavigator(): React.JSX.Element {
  const userData = useSelector(selectUserData);

  return (
    <ParentStack.Navigator>
      {!userData ? (
        <ParentStack.Screen
          options={{headerShown: false}}
          name="Private"
          component={PrivateRoutes}
        />
      ) : (
        <ParentStack.Screen
          options={{headerShown: false}}
          name="Auth"
          component={Auth}
        />
      )}
    </ParentStack.Navigator>
  );
}

export default function MainNavigator(): React.JSX.Element {
  return (
    <MainStack.Navigator
      screenOptions={{
        animation: 'ios_from_left',
      }}>
      <MainStack.Screen
        options={{headerShown: false}}
        name="App"
        component={ParentNavigator}
      />
    </MainStack.Navigator>
  );
}
