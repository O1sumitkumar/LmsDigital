import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '@toolkit/rootReducer';
import {useSelector} from 'react-redux';
import PrivateRoutes from './Private';
import Auth from './Auth';
import React from 'react';

const MainStack = createNativeStackNavigator();
const ParentStack = createNativeStackNavigator();

function ParentNavigator(): React.JSX.Element {
  const {userData} = useSelector((state: RootState) => state?.userData);

  return (
    <ParentStack.Navigator>
      {userData ? (
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
    <MainStack.Navigator>
      <MainStack.Screen
        options={{headerShown: false}}
        name="App"
        component={ParentNavigator}
      />
    </MainStack.Navigator>
  );
}
