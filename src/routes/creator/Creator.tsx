import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {creatorPath, creatorStacks} from '.';
import React from 'react';

const CreatorTab = createBottomTabNavigator();

export default function CreatorTabs() {
  return (
    <CreatorTab.Navigator>
      <CreatorTab.Screen
        name={creatorPath.home}
        component={creatorStacks.HomeStack}
      />
      <CreatorTab.Screen
        name={creatorPath.myPage}
        component={creatorStacks.MyPageStack}
      />
      <CreatorTab.Screen
        name={creatorPath.users}
        component={creatorStacks.UsersStack}
      />
      <CreatorTab.Screen
        name={creatorPath.settings}
        component={creatorStacks.SettingsStack}
      />
    </CreatorTab.Navigator>
  );
}
