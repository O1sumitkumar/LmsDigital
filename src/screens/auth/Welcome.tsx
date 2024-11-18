import PrimaryBtn from '@components/button/PrimaryBtn';
import Typography from '@components/typography/Typography';
import useAppTheme from '@hooks/useAppTheme';
import strings from '@language/index';
import PrimaryLayout from '@layouts/Primary';
import SecondaryLayout from '@layouts/Secondary';
import React from 'react';

interface WelcomeScreenProps extends ScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  // function to navigate
  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  const {colors} = useAppTheme();

  return (
    <PrimaryLayout isCenter>
      <SecondaryLayout gap={24} paddingVertical={20}>
        <Typography
          text={strings.welcome}
          fontSize={24}
          lineHeight={32}
          textAlign="center"
          fontWeight="bold"
        />
        <Typography text={strings.joinAfeed} fontSize={14} textAlign="center" />

        <PrimaryBtn
          text="Get Started"
          onPress={() => handleNavigate('SignUp')}
          children={undefined}
        />
        <PrimaryBtn
          text="Login"
          onPress={() => handleNavigate('Login')}
          children={undefined}
          additionalBtnStyle={{
            backgroundColor: colors.secondaryBtn,
          }}
        />
      </SecondaryLayout>
    </PrimaryLayout>
  );
};

export default WelcomeScreen;
