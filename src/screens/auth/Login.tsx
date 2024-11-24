import DividerWithText from '@components/divider/Divider';
import SocialAuth from '@components/socialAuth/SocialAuth';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import {useTranslation} from 'react-i18next';
import PrimaryLayout from '@layouts/Primary';
import Secondary from '@layouts/Secondary';
import InputField from '@input/InputField';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface LoginProps extends ScreenProps {}

const Login: React.FC<LoginProps> = () => {
  const baseKey = 'auth.loginScreen';
  const {t} = useTranslation();

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
          <Spacer paddingVertical={0} paddingHorizontal={0} gap={0}>
            <InputField
              label={t(`${baseKey}.emailAddress`)}
              isError={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.password`)}
              isError={false}
              errorText={''}
            />
            <InputField
              label={t(`${baseKey}.mobileNumber`)}
              isError={false}
              errorText={''}
            />
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default Login;
