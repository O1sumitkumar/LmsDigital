import CombinationTextBtn from '@button/CombinationTextBtn';
import AvoidKeyBoard from '@layouts/AvoidKeyBoard';
import AuthHeading from '@heading/AuthHeading';
import PrimaryLayout from '@layouts/Primary';
import {useTranslation} from 'react-i18next';
import PrimaryBtn from '@button/PrimaryBtn';
import Secondary from '@layouts/Secondary';
import InputField from '@input/InputField';
import Spacer from '@layouts/Spacer';
import React from 'react';

interface ForgotPasswordProps extends ScreenProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const baseKey = 'auth.forgotPasswordScreen';
  const preKey = 'auth.loginScreen';
  const {t} = useTranslation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <PrimaryLayout>
      <AvoidKeyBoard>
        <Secondary isCenter gap={16}>
          <AuthHeading
            title={t(`${baseKey}.screenTitle`)}
            subTitle={t(`${baseKey}.subTitle`)}
            titleAlign="center"
          />

          <InputField
            label={t(`${preKey}.emailAddress`)}
            error={false}
            errorText={''}
          />

          <Spacer paddingVertical={24} paddingHorizontal={0} gap={16}>
            <PrimaryBtn onPress={() => handleNavigate('ResetEmailSent')}>
              {t(`${baseKey}.submitBtn`)}
            </PrimaryBtn>
            <CombinationTextBtn
              onPress={() => handleNavigate('Login')}
              subTitle=""
              btnText={t(`${baseKey}.returnToLogin`)}
            />
          </Spacer>
        </Secondary>
      </AvoidKeyBoard>
    </PrimaryLayout>
  );
};

export default ForgotPassword;
