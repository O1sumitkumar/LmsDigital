import SettingsStack from './Settings';
import MyPageStack from './MyPage';
import UsersStack from './Users';
import HomeStack from './Home';

export const creatorStacks = {
  HomeStack: HomeStack,
  UsersStack: UsersStack,
  SettingsStack: SettingsStack,
  MyPageStack: MyPageStack,
};

export const creatorPath = {
  home: 'Home',
  users: 'Users',
  settings: 'Settings',
  myPage: 'MyPage',
};
