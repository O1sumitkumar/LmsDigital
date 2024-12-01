import CombinationTextBtn from '@button/CombinationTextBtn';
import SocialAuth from '@components/socialAuth/SocialAuth';
import DividerWithText from '@components/divider/Divider';
import CheckBoxWithText from '@button/CheckBoxWithText';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import InputField from '@input/InputField';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const baseKey = 'auth.loginScreen';
  const {t} = useTranslation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
          />
          <SocialAuth
            onApplePress={() => {}}
            onFacebookPress={() => {}}
            onGooglePress={() => {}}
          />
          <DividerWithText text={t('auth.or')} />
          <Spacer paddingVertical={0} paddingHorizontal={0} gap={16}>
            <InputField
              label={t(`${baseKey}.emailAddress`)}
              error={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.password`)}
              error={false}
              errorText={''}
            />
            <CheckBoxWithText
              subTitle={t(`${baseKey}.keepMeText`)}
              onPress={() => handleNavigate('ForgotPassword')}
              rightBtnText={t(`${baseKey}.forgetPassword`)}
            />
          </Spacer>
          <PrimaryBtn>{t(`${baseKey}.screenTitle`)}</PrimaryBtn>
          <CombinationTextBtn
            onPress={() => handleNavigate('SignUp')}
            subTitle={t(`${baseKey}.dontHaveAccount`)}
            btnText={t(`${baseKey}.register`)}
          />
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default Login;
