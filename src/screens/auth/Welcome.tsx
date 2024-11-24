import SecondaryLayout from '@layouts/Secondary';
import Typography from '@typography/Typography';
import useAppTheme from '@hooks/useAppTheme';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface WelcomeScreenProps extends ScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };
  const {colors} = useAppTheme();
  const baseKey = 'auth.welcomeScreen';

  return (
    <PrimaryLayout>
      <SecondaryLayout gap={24} paddingVertical={20} isCenter>
        <Typography
          text={t(`${baseKey}.welcome`)}
          fontSize={24}
          lineHeight={32}
          textAlign="center"
          fontWeight="bold"
        />
        <Typography
          text={t(`${baseKey}.joinAfeed`)}
          fontSize={14}
          textAlign="center"
        />

        <Spacer>
          <PrimaryBtn
            text={t(`${baseKey}.getStarted`)}
            onPress={() => handleNavigate('SignUp')}
            children={undefined}
          />
          <PrimaryBtn
            text={t('auth.login')}
            onPress={() => handleNavigate('Login')}
            children={undefined}
            additionalBtnStyle={{
              backgroundColor: colors.secondaryBtn,
            }}
          />
        </Spacer>
      </SecondaryLayout>
    </PrimaryLayout>
  );
};

export default WelcomeScreen;
