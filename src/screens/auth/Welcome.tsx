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
      <SecondaryLayout gap={48} paddingVertical={20} isCenter>
        <Spacer gap={24}>
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
        </Spacer>

        <Spacer paddingHorizontal={16} gap={16}>
          <PrimaryBtn onPress={() => handleNavigate('SignUp')}>
            {t(`${baseKey}.getStarted`)}
          </PrimaryBtn>
          <PrimaryBtn
            onPress={() => handleNavigate('Login')}
            additionalBtnStyle={{
              backgroundColor: colors.secondaryBtn,
            }}>
            {t('auth.login')}
          </PrimaryBtn>
        </Spacer>
      </SecondaryLayout>
    </PrimaryLayout>
  );
};

export default WelcomeScreen;
